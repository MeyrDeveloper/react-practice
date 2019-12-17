var webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: './src/server/index-client.js',
    output: {
        path: path.join(__dirname, 'assets'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}