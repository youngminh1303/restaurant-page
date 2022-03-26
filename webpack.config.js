const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js",
        home: "./src/home.js",
        about: "./src/menu.js",
        contact: "./src/contact.js",
        loading: "./src/loading.js",
        wipeout: "./src/wipeout.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
            }
        ]
    }
}