export default {
    entry: './src/index',
    output: {
      path: './dist',
      filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loaders: ['babel']},
        ]
    },
}
