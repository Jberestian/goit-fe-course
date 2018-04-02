const path = require('path');

const config = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: [
                            "transform-decorators-legacy",
                            "transform-class-properties"
                        ]
                    }
                }
            }]

    },
    devServer:{
        port: 3000
    }};

module.exports = config;