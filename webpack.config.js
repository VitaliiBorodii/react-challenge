const ExtractTextPlugin = require('extract-text-webpack-plugin');
const buildDir = './dist';
const webpack = require('webpack');
const HOST = process.env.TUBITY_API_HOST || 'http://127.0.0.1:9990';
const plugins = [
    new ExtractTextPlugin('bundle.css', {
    allChunks: true
    }),
    new webpack.DefinePlugin({
        'HOST': JSON.stringify(HOST),
    }),
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
];

module.exports = {
    entry: './src/index.js',
    output: {
        path: buildDir,
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {test: /\.(js|jsx)$/, loaders: ['babel'], exclude: /(node_modules)/},
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", 'css-loader')},
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx'],
    },
    plugins: plugins,
};