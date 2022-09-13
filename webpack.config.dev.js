const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]_bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[contenthash].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: 'src/view/index.html',
                chunks: ['index']
            }
        ),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                path.resolve(process.cwd(), 'build/**/*')
            ]
        })
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'async',
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
};