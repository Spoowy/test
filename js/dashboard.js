// #sales-num #pageviews-num #revenue-num #leads-num #sales-average-num
const KeenClient = new KeenAnalysis({
    projectId: window.projectId,
    readKey: window.readKey
});

function get_timeframe() {
    return 'this_month';
}

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
            $('#sales-num').html(res.result);
        })
        .catch(function(err) {

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
            $('#revenue-num').html(res.result);
        })
        .catch(function(err) {});

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
            $('#pageviews-num').html(res.result);
            $('#pageviews-num2').html(res.result);
        })
        .catch(function(err) {});

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
            $('#clicks-num').html(res.result);
        })
        .catch(function(err) {});

    // average sales value
    KeenClient
        .query("average", {
            event_collection: "purchases",
            target_property: "sum_price",
            timeframe: timeframe,
            filters: [{
                "operator": "eq",
                "property_name": "project",
                "property_value": window.project
            }],
            timezone: "Europe/Paris"
        })
        .then(function(res) {
            $('#transaction-average-num').html(Math.round(res.result * 100) / 100);
        })
        .catch(function(err) {});


}

jQuery(document).ready(function() {
    refresh_charts();
    //Stat widget bars
    $(".widget-bars").peity("bar", {
        fill: ["#fff"],
        height: 45,
        width: '100%'
    });
    //Activity widget line
    $(".widget-lines").peity("line", {
        fill: ["#fff"],
        stroke: "#fff",
        height: 45,
        width: '100%'
    });
});
