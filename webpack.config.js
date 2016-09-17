const ExtractTextPlugin = require('extract-text-webpack-plugin');
const buildDir = './dist';
const webpack = require('webpack');
const production = process.env.NODE_ENV === 'production';
const plugins = [new ExtractTextPlugin('bundle.css', {
    allChunks: true
}),
    new webpack.DefinePlugin({
        'HOST': "'http://192.168.99.100:9990'",
    }),
];

if (production) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}))
}
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