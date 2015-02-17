var path = require("path");

module.exports = {
    context: __dirname + "/js",
    entry: "./index.js",
    output: {
        path: __dirname + "/js",
        publicPath: "/js",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.html$/, loader: "html" },
            { test: /\.js6$/, loader: "6to5-loader" }
        ]
    },
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['', '.js', '.json', '.coffee'],
        root: [
            path.join(__dirname, "js"),
            path.join(__dirname, "css"),
            path.join(__dirname, "bower_components")
        ],
        modulesDirectories: ['node_modules'],
    }
};