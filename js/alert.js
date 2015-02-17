define(function(require) {
    var html = require("templates/alert.tmpl.html"),
        handlebars = require("handlebars/handlebars"),
        styles = require("alert.css"),
        template = handlebars.compile(html);

    var Accordion = require("accordion.js6").Accordion;

    var div = document.createElement("div");

    var alerts = document.querySelectorAll("lp-alert");

    Array.prototype.forEach.call(alerts, function(alert) {
        var data = alert.attributes["msg"].value;

        alert.innerHTML = template({
            msg: data
        });
    });

    return;
});
