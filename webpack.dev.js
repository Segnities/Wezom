const path = require("path");

const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('webpack-merge');

module.exports = merge(common,{
    mode: 'development',

    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist'),
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/template.html"
        })
    ],
    module:{
        rules:[
            {
            test:/\.scss$/,
            use: [
                'style-loader',//3.Запихивает стили в DOM
                'css-loader',//2.css в js
                'sass-loader'//1.scss в css
            ]
        }
    ],
    }
});