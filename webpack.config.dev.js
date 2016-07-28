export default {
    entry: 'index.js',
    output: 'index-compiled.js',
    module: {
        loaders: [
            {test: /\.js$/, loaders: ['babel']},
        ]
    },
}