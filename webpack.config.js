const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    plugins: [

        new htmlWebpackPlugin({

            filename: 'index.html',
            template: "./src/index.html"
        })
    ],

    module: {

        rules: [

            {
                test: /\.html$/,
                use: [
                    "html-loader"
                ]
            },

            {

                test: /\.sass$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },

            {
                test: /\.(jpg|png|svg|gif)/,
                use: [
                    "file-loader"
                ]
            }


        ]
    }

}