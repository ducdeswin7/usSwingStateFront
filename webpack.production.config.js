let path = require('path');
let config = {
    entry: path.resolve(__dirname, './app/App.js'),
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,

                // There is not need to run the loader through
                // vendors
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015'],
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    }
};

module.exports = config;
