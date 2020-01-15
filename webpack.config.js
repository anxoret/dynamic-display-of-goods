const path = require("path");

module.exports = {
    entry: {
        products: "./src/js/products.js"
    },
    watch: true,
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "source-map"
};