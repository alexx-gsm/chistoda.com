const NODE_ENV = process.env.NODE_ENV || 'dev';
const webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: {
        index: './index'
    },
    output: {
        // path: __dirname + './public/assets/js',
        filename: './public/dist/app.bundle.js',
        library: '[name]'
    },

    watch: NODE_ENV == 'dev',
    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV == 'dev' ? 'source-map' : null,

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
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
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