const path = require('path'); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = {
    entry: './src/index.js', // Точка входа для сборки проекта

    output: {
        filename: 'bundle.js', // Имя выходного файла сборки
        path: path.resolve(__dirname, 'dist'), // Путь для выходного файла сборки
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                use: 'html-loader',
            },

            {
                // If you enable `experiments.css` or `experiments.futureDefaults`, please uncomment line below
                // type: "javascript/auto",
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ],
                generator: {
                              filename: '[name].[contenthash][ext]',
                            },
            },

            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },

            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        })],

    devServer:
    {
        watchFiles: path.join(__dirname, 'src'),
        port: 9000,
    },    
};
