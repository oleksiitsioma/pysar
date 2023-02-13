const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    plugins: [ new MiniCssExtractPlugin({
        filename: '[name].css'
    })],
    output: {
        path: path.resolve( __dirname, 'build' ),
        filename: 'pysar-script.js',
        clear: true
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  "sass-loader",
                ],
            }
        ]
    }

}