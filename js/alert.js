define(function(require) {
    var html = require("templates/alert.tmpl.html"),
        handlebars = require("bower_components/handlebars/handlebars"),
        styles = require("../css/alert.css"),
        template = handlebars.compile(html);

    var div = document.createElement("div");

    var alerts = document.querySelectorAll(".alert");

    Array.prototype.forEach.call(alerts, function(alert) {
        var data = alert.dataset["lp-alert"];

        console.log(typeof data);
        console.log(alert);

        alert.innerHTML = template(data);
    });

    return;
});
