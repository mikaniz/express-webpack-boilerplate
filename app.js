const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.dev.js');
const compiler = webpack(webpackConfig);

const express = require('express');
const port = 3000;
const app = express();

const indexRouter = require('./routes/index');

app.use(express.json());
app.use(express.static(__dirname));
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        stats: { colors: true },
    })
);

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Server running . . . http://localhost:${port}`);
});