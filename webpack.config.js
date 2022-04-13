const webpack = require('webpack')
const path    = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CSSExtractPlugin  = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3030,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    plugins: [
        new CSSExtractPlugin({
            filename: '[name][contenthash].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/assets/images',
                    to: 'assets/images'
                }
            ]
        }),
        new HtmlWebpackPlugin({
            title: 'Single Page App',
            filename: 'index.html',
            template: 'src/index.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: './views/home.html',
            template: 'src/views/home.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: './views/gallery.html',
            template: 'src/views/gallery.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: './views/about.html',
            template: 'src/views/about.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: './views/404.html',
            template: 'src/views/404.html',
            inject: false
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [CSSExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}