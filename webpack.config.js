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
        }),

        new htmlWebpackPlugin({
            filename: "about.html",
            template: "./src/about.html"
        }),

        new htmlWebpackPlugin({

            filename: 'register.html',
            template: "./src/register.html"
        }),

        new htmlWebpackPlugin({

            filename: 'login.html',
            template: './src/login.html'
        }),

        new htmlWebpackPlugin({
            filename: "contact.html",
            template: "./src/contact.html"
        }),

        new htmlWebpackPlugin({
            filename: "shop.html",
            template: "./src/shop.html"
        }),


        new htmlWebpackPlugin({
            filename: "cart.html",
            template: "./src/cart.html"
        }),


        new htmlWebpackPlugin({
            filename: 'postItem.html',
            template: "./src/postItem.html"
        }),

        new htmlWebpackPlugin({
            filename: "profile.html",
            template: "./src/profile.html"
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

                test: /\.(sass|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },


            {
                test: /\.js$/,
                exclude: "/node_modules",
                use: [
                    "babel-loader"
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