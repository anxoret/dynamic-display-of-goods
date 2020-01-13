const path = require("path");

module.exports = {
    entry: {
        dynamicGoods: "./src/js/dynamic-display-of-goods.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "source-map"
};