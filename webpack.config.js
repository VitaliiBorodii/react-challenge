const ExtractTextPlugin = require("extract-text-webpack-plugin");
const buildDir = './dist';
const webpack = require("webpack");
const production = process.env.NODE_ENV === 'production';
const plugins = [new ExtractTextPlugin("[name].css", {
    allChunks: true
})];

if (production) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}))
}
module.exports = {
    entry: './src/index.js',
    output: {
        path: buildDir,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.(js|jsx)$/, loaders: ['babel'], exclude: /(node_modules|bower_components)/},
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"}
        ]
    },
    //watch: true,
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    },
    plugins: plugins
};