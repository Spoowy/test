var Fields = {

    // Grouped fields
    "group": function(field, value) {
        // Would be cool if this case would be caught automatically [], and recursively rendered
    },

    // List of items
    "list": function(field, value) {
        // Recursively render the items, maybe put them in a group
    },

    // Datepicker
    "date": function(field, value) {

    },

    "product": function(field, value) {

    },

    "color": function(field, value) {

    },

    "text": function(field, value) {
        field.min,
        field.max;
    },

    "link": function(field, value) {

    },

    "image": function(field, value) {
        // field = {name, type, label}
        console.log("fields.image", value);
        return '<textarea placeholder="Image" name="'+ field.name +'">' + value + '</textarea>';
    },

    "address": function(field, value) {
    },

    "video": function(field, value) {

    },

    "number": function(field, value) {
        // field = {name, type, label, min, max}
    },

    "range": function(field, value) {
        // field = {name, type, label, min, max}
    },

    "select": function(field, value) {
        // field = {name, type, label, options}
    },

    "switch": function(field, value) {

    }

}
