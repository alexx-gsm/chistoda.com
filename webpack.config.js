const NODE_ENV = process.env.NODE_ENV || 'dev';
const webpack = require('webpack');
const path = require('path');
require('autoprefixer');

module.exports = {
    context: __dirname + '/src',
    entry: {
        index: './index'
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: './dist/app.bundle.js',
        library: '[name]',
        // publicPath: 'images/'

    },

    watch: NODE_ENV == 'dev',
    watchOptions: {
        aggregateTimeout: 100
    },

    // devtool: NODE_ENV == 'dev' ? 'source-map' : null,

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.EnvironmentPlugin({
            minimize: true,
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],

    module: {
        rules: [
          {
              test: /\.js$/,
              exclude: [/node_modules/],
              loader: 'babel-loader',
          }, {
          //     test: /\.css$/,
          //     use: ['style-loader', 'css-loader', 'postcss-loader']
          // }, {
          //     test: /\.less$/,
          //     use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
          // },
          // {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
                "file-loader?name=images/img-[hash:6].[ext]"
                // 'url-loader?limit=10000'
                // 'file-loader?name=[name].[ext]',
                // 'img-loader'
            ]
          }
        ]
    }
}

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            warnings: false,
            drop_console: true,
            unsafe: true
        })
    )
}