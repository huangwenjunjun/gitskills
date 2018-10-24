const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: [
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ],
        vendor: ['react','react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[hash].js',
        chunkFilename: "[name].[chunkhash].js"
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        port: 8080,
        historyApiFallback: true,
        // host: '0.0.0.0'
    },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader"
            },
            // include: path.join(__dirname,'src'),
            exclude: /node_modules/
        },{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },{
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: "url-loader",
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
        }
    },
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
};