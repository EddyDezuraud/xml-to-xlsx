const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.xml$/,
                use: 'xml-loader',
            },
        ],
    },
    optimization: {
        minimize: true
    },
    resolve: {
        fallback: {
            "stream": require.resolve("stream-browserify"),
            "string_decoder": require.resolve("string_decoder/"),
            "timers": require.resolve("timers-browserify"),
            buffer: require.resolve("buffer/")
        }
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "index.html"),
                    to: path.resolve(__dirname, "public"),
                },
            ],
        }),
    ]
};
