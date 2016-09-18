var ExtractTextPlugin = require('extract-text-webpack-plugin');
var buildDir = './dist';
var webpack = require('webpack');
var HOST;
try {
    var config = require('./configs/config.json');
    HOST = config.TUBITY_API_HOST;
} catch (e) {
    console.error('Please specify `TUBITY_API_HOST` variable in `configs/config.json` file');
    HOST = 'http://127.0.0.1:9990';
}
var plugins = [
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