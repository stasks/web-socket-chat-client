module.exports = {
    entry: {
        bundle: ['babel-polyfill', './src/index.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: "css-loader?url=false",
                        query: {
                            modules: true,
                            minimize: true,
                            camelCase: true,
                            localIdentName: "[hash:base64:3]"
                        }
                    }
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: '[name].js'
    },
    devServer: {
        contentBase: './dist'
    }
};