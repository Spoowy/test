const KeenClient = new KeenAnalysis({
    projectId: window.projectId,
    readKey: window.readKey
});

// returns array of url vars
function get_url_vars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars;
}

// returns url parameter or default value
function get_url_param(parameter, defaultvalue) {
    var urlparameter = defaultvalue;
    if (window.location.href.indexOf(parameter) > -1) {
        urlparameter = get_url_vars()[parameter];
    }
    return urlparameter;
}

function update_query() {
    var params, str, dateType;
    dateType = $('#date-type').val();
    if (dateType == 'range')
        str = '?startDate=' + $('#start').datepicker('getDate', true) + '&endDate=' + $('#end').datepicker('getDate', true);
    else
        str = '?fixedTimeframe=' + dateType;
    history.pushState(null, null, str);
}

// returns timeframe from URL or this_14_days
function get_timeframe() {
    var startDate = get_url_param('startDate', 'empty');
    var endDate = get_url_param('endDate', 'empty');
    var fixedTimeframe = get_url_param('fixedTimeframe', 'empty');
    // return default if no start date or timeframe given
    if (startDate == 'empty' && fixedTimeframe == 'empty') return 'this_14_days';
    else if (fixedTimeframe != 'empty') return fixedTimeframe;
    return {
        start: startDate,
        end: endDate
    };
}

//
//
//
//
//

// initializes all charts
var purchase_chart = new Keen.Dataviz({
    clearOnRender: true,
    container: '#purchases-metric',
    height: 240,
    type: 'metric',
    title: window.lang_sales
}).prepare();

var sum_amount_chart = new Keen.Dataviz({
    clearOnRender: true,
    container: '#sum_amount-metric',
    height: 240,
    type: 'metric',
    title: window.lang_revenue_label
}).prepare();

var pageviews_chart = new Keen.Dataviz({
    clearOnRender: true,
    container: '#pageviews-metric',
    height: 240,
    type: 'metric',
    title: window.lang_pageviews
}).prepare();

var unique_pageviews_chart = new Keen.Dataviz({
    clearOnRender: true,
    container: '#unique_pageviews-metric',
    height: 240,
    type: 'metric',
    title: window.lang_unique_pageviews
}).prepare();

var clicks_chart = new Keen.Dataviz({
    clearOnRender: true,
    container: '#clicks-metric',
    height: 240,
    type: 'metric',
    title: window.lang_clicks
}).prepare();

var pageviews_purchases_chart = new Keen.Dataviz({
    clearOnRender: true,
    container: '#pageviews_purchases-chart',
    type: 'area-spline',
    title: window.lang_pageviews,
    labelMapping: {
        'purchases sum': window.lang_revenue,
        'pageviews count': window.lang_pageviews,
        'purchases count': window.lang_purchases
    },
    interval: 'daily',
    height: 480
}).prepare();

var pageviews_timeline = new Keen.Dataviz({
    clearOnRender: true,
    container: '#pageviews_timeline-chart',
    type: 'area-spline',
    height: 480,
    title: window.lang_pageviews_by_browser,
    sortGroups: 'desc'
}).prepare();

var pageviews_pie = new Keen.Dataviz({
    clearOnRender: true,
    container: '#pageviews_browser-chart',
    type: 'pie',
    height: 480,
    title: window.lang_pageviews_by_browser,
    sortGroups: 'desc'
}).prepare();

//
//
//
//
//
//

// refresh charts
function refresh_charts() {
    var timeframe = get_timeframe();

    // purchases metric
    KeenClient
        .query("count", {
            event_collection: "purchases",
            filters: [{
                "operator": "eq",
                "property_name": "project",
                "property_value": window.project
            }],
            // timeframe: "this_14_days",
            timezone: "Europe/Paris",
            timeframe: timeframe
        })
        .then(function(res) {
            purchase_chart.render(res);
        })
        .catch(function(err) {
            purchase_chart.message(err.message);
        });

    // sum price metric
    KeenClient
        .query("sum", {
            event_collection: "purchases",
            filters: [{
                "operator": "eq",
                "property_name": "project",
                "property_value": window.project
            }],
            target_property: "sum_price",
            timeframe: timeframe,
            timezone: "Europe/Paris"
        })
        .then(function(res) {
            sum_amount_chart.render(res);
        })
        .catch(function(err) {
            sum_amount_chart.message(err.message);
        });

    // pageviews metric
    KeenClient
        .query("count", {
            event_collection: "pageviews",
            filters: [{
                "operator": "eq",
                "property_name": "page.project",
                "property_value": window.project
            }],
            timeframe: timeframe,
            timezone: "Europe/Paris"
        })
        .then(function(res) {
            pageviews_chart.render(res);
        })
        .catch(function(err) {
            pageviews_chart.message(err.message);
        });

    // unique pageviews metric
    KeenClient
        .query("count_unique", {
            event_collection: "pageviews",
            target_property: "user.uuid",
            timeframe: timeframe,
            timezone: "Europe/Paris",
            filters: [{
                "operator": "eq",
                "property_name": "page.project",
                "property_value": window.project
            }]
        })
        .then(function(res) {
            unique_pageviews_chart.render(res);
        })
        .catch(function(err) {
            unique_pageviews_chart.message(err.message);
        });

    // clicks metric
    KeenClient
        .query("count", {
            event_collection: "clicks",
            filters: [{
                "operator": "eq",
                "property_name": "page.project",
                "property_value": window.project
            }],
            timeframe: timeframe,
            timezone: "Europe/Paris"
        })
        .then(function(res) {
            clicks_chart.render(res);
        })
        .catch(function(err) {
            clicks_chart.message(err.message);
        });

    // pageviews / purchaes chart
    const countPageviews = KeenClient
        .query({
            analysis_type: 'count',
            event_collection: 'pageviews',
            timeframe: timeframe,
            timezone: "Europe/Paris",
            interval: 'daily',
            filters: [{
                "operator": "eq",
                "property_name": "page.project",
                "property_value": window.project
            }]
        });

    const countPurchases = KeenClient
        .query({
            analysis_type: 'count',
            event_collection: 'purchases',
            timeframe: timeframe,
            timezone: "Europe/Paris",
            interval: 'daily',
            filters: [{
                "operator": "eq",
                "property_name": "project",
                "property_value": window.project
            }]
        });

    const sumPurchases = KeenClient
        .query({
            analysis_type: 'sum',
            event_collection: 'purchases',
            timeframe: timeframe,
            timezone: "Europe/Paris",
            interval: 'daily',
            target_property: "sum_price",
            filters: [{
                "operator": "eq",
                "property_name": "project",
                "property_value": window.project
            }]
        });

    KeenClient
        .run([countPageviews, countPurchases, sumPurchases])
        .then(function(res) {
            pageviews_purchases_chart.render(res);
        })
        .catch(function(err) {
            pageviews_purchases_chart.message(err.message);
        });

    // pageviews grouped by browser family
    KeenClient
        .query('count', {
            event_collection: 'pageviews',
            interval: 'daily',
            group_by: 'tech.browser.family',
            timeframe: timeframe,
            filters: [{
                "operator": "eq",
                "property_name": "page.project",
                "property_value": window.project
            }]
        })
        .then(function(res) {
            pageviews_timeline
                .data(res)
                .render();
        })
        .catch(function(err) {
            pageviews_timeline.message(err.message)
        });

    // pageviews by browser (pie)
    KeenClient
        .query('count', {
            event_collection: 'pageviews',
            group_by: 'tech.browser.family',
            timeframe: timeframe,
            filters: [{
                "operator": "eq",
                "property_name": "page.project",
                "property_value": window.project
            }]
        })
        .then(function(res) {
            pageviews_pie
                .data(res)
                .render();
        })
        .catch(function(err) {
            pageviews_pie.message(err.message)
        });
}

//
//
//

(function() {
    refresh_charts();
})();

function change_date_type(value) {
    if (value == 'range') {
        $('.date-field-wrap').show();
        qi('start').focus();
	setTimeout(function() {
	    $('#start').datepicker('show');
	}, 300);
    } else
        $('.date-field-wrap').hide();
    update_query();
    refresh_charts();
};

function update_start_date(el) {
    $(el).datepicker('hide');
    $('#end').focus().datepicker('setStartDate', $(el).datepicker('getDate', true));
    update_query();
    refresh_charts();
};

function update_end_date(el) {
    $(el).datepicker('hide');
    update_query();
    refresh_charts();
}

function change_page(value) {
    if (value == 'all') {
        window.location = "analytics_view.htm";
    } else {
        window.location = "analytics_page_view.htm?id=" + value;
    }
}
