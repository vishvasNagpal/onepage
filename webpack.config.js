var webpack = require('webpack');
var path = require('path');


module.exports = {
    entry: "./public/js/client.jsx",
    watch:true,
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: 'public/'
    },
    module: {
        loaders:[
            {
                test:/\.jsx$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets:['react','es2015','stage-2','env'],
                    plugins: ['react-html-attrs','transform-class-properties','transform-decorators-legacy','transform-object-rest-spread']
                }
            }
        ]
    }
};