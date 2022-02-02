const path = require("path");

const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common,{
    mode: 'production',

    output:{
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname,'dist'),
    },

    optimization:{
        minimizer:[
            new CssMinimizerPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template:"./src/template.html",
                minify:{
                    collapseWhitespace:true,
                    removeComments:true
                }
            })
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({filename:"[name].[contenthash].css"}),
        new CleanWebpackPlugin(),
    ],
    module:{
        rules:[
            {
            test:/\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,//3.Запихивает стили в файлик
                'css-loader',//2.css в js
                'sass-loader'//1.scss в css
            ]
        }
    ],
    }
});