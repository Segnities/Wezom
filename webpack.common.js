const path = require("path");
module.exports = {
    entry:{
        main:"./src/index.js",
        vendor:"./src/vendor.js"
    },
    module:{
        rules:
        [
            {
                test:/\.html$/,
                use:[
                    'html-loader'
                ]
            },

            /*{
                test:/\.(svg|gif)$/,
                use:{
                   loader: 'file-loader',
                   options: {
                       name: "[name].[contenthash].[ext]",
                       outputPath:"img"
                   }
                }  
            },*/
        ]
    },
 
};