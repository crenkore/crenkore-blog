import browserSync from 'browser-sync';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const bundler = webpack(config);

browserSync({
    port: 5001,
    server: {
        baseDir: 'src',
        middleware: [
            webpackDevMiddleware(bundler, {
                publicPath: config.output.publicPath,
                stats: {colors: true},
                noInfo: true
            }),
            webpackHotMiddleware(bundler)
        ]
    },
    files: [
        'src/*.html'
    ]
});
