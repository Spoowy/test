const client = new KeenAnalysis({
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
        str = '?id='+ get_url_param('id', 0) +'&startDate=' + $('#start').datepicker('getDate', true) + '&endDate=' + $('#end').datepicker('getDate', true);
    else
        str = '?id='+ get_url_param('id', 0) +'&fixedTimeframe=' + dateType;
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

var pageviews_ab_chart = new Keen.Dataviz({
    clearOnRender: true,
    container: '#pageviews_purchases-chart',
    type: 'area-spline',
    title: window.lang_pageviews,
    labels: ['Page A', 'Page B'],
    interval: 'daily',
    height: 480
}).prepare();

var purchases_ab_chart = new Keen.Dataviz({
    clearOnRender: true,
    container: '#purchases_chart-chart',
    type: 'area-spline',
    title: window.lang_purchases,
    labels: ['Page A', 'Page B'],
    interval: 'daily',
    height: 480
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
    client
        .query("count", {
            event_collection: "purchases",
            filters: [{
                "operator": "eq",
                "property_name": "abtest",
                "property_value": window.abtest
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
    client
        .query("sum", {
            event_collection: "purchases",
            filters: [{
                "operator": "eq",
                "property_name": "abtest",
                "property_value": window.abtest
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
    client
        .query("count", {
            event_collection: "pageviews",
            filters: [{
                "operator": "eq",
                "property_name": "page.abtest",
                "property_value": window.abtest
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
    client
        .query("count_unique", {
            event_collection: "pageviews",
            target_property: "user.uuid",
            timeframe: timeframe,
            timezone: "Europe/Paris",
            filters: [{
                "operator": "eq",
                "property_name": "page.abtest",
                "property_value": window.abtest
            }]
        })
        .then(function(res) {
            unique_pageviews_chart.render(res);
        })
        .catch(function(err) {
            unique_pageviews_chart.message(err.message);
        });

    // clicks metric
    client
        .query("count", {
            event_collection: "clicks",
            filters: [{
                "operator": "eq",
                "property_name": "page.abtest",
                "property_value": window.abtest
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

    // pageviews chart
    const countPageviewsA = client
        .query({
            analysis_type: 'count',
            event_collection: 'pageviews',
            timeframe: timeframe,
            timezone: "Europe/Paris",
            interval: 'daily',
            filters: [{
                "operator": "eq",
                "property_name": "page.id",
                "property_value": window.page_a
            }, {
                "operator": "eq",
                "property_name": "page.abtest",
                "property_value": window.abtest
            }]
        });
    const countPageviewsB = client
          .query({
              analysis_type: 'count',
              event_collection: 'pageviews',
              timeframe: timeframe,
              timezone: "Europe/Paris",
              interval: 'daily',
              filters: [{
                  "operator": "eq",
                  "property_name": "page.id",
                  "property_value": window.page_b
              }, {
                  "operator": "eq",
                  "property_name": "page.abtest",
                  "property_value": window.abtest
              }]
          });
    client
        .run([countPageviewsA, countPageviewsB])
        .then(function(res) {
            pageviews_ab_chart.render(res);
        })
        .catch(function(err) {
            pageviews_ab_chart.message(err.message);
        });

    // purchases chart
    const countPurchasesA = client
        .query({
            analysis_type: 'count',
            event_collection: 'purchases',
            timeframe: timeframe,
            timezone: "Europe/Paris",
            interval: 'daily',
            filters: [{
                "operator": "eq",
                "property_name": "page",
                "property_value": window.page_a
            }, {
                "operator": "eq",
                "property_name": "abtest",
                "property_value": window.abtest
            }]
        });
    const countPurchasesB = client
          .query({
              analysis_type: 'count',
              event_collection: 'purchases',
              timeframe: timeframe,
              timezone: "Europe/Paris",
              interval: 'daily',
              filters: [{
                  "operator": "eq",
                  "property_name": "page",
                  "property_value": window.page_b
              }, {
                  "operator": "eq",
                  "property_name": "abtest",
                  "property_value": abtest
              }]
          });
    client
        .run([countPurchasesA, countPurchasesB])
        .then(function(res) {
            purchases_ab_chart.render(res);
        })
        .catch(function(err) {
            purchases_ab_chart.message(err.message);
        });

    const countPurchases = client
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

    const sumPurchases = client
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
        document.getElementById('start').focus();
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
