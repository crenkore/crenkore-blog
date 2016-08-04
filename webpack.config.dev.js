import webpack from 'webpack';

export default {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './src/index'
    ],
    target: 'web',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [
            {test: /\.js$/, loaders: ['babel']},
        ]
    },
}
