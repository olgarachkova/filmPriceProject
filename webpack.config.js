const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: false,
        port: 9000,
        historyApiFallback: {
            index: path.join(__dirname, 'dist', 'index.html'),
        },
    },
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src', 'components'),
            assets: path.resolve(__dirname, 'src', 'assets'),
            containers: path.resolve(__dirname, 'src', 'containers'),
            reducers: path.resolve(__dirname, 'src', 'reducers'),
            actions: path.resolve(__dirname, 'src', 'actions'),
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    //MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ]
}