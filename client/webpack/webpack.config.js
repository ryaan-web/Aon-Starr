var path = require('path');
var merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const parts = require("./webpack.parts");


const commonConfig = merge([
    {
        plugins: [
            new HtmlWebpackPlugin({
            title: "Webpack demo",
            }),
        ],
    },
]);

const prodConfig = merge([]);

const devConfig = merge([
    parts.devServer({
        host: '127.0.0.1',
        port: 9000
    })
]);


module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: {
                    modules: true
                    }
                }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            }
        ]
    },
    output: {
        filename: "../dist/main.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        compress: true,
        port: 9000,
        watchContentBase: true,
        progress: true,
        hot: true,
        injectLive: true
    }
}

b1, b4, b2, b3

b1, b2, b3, b4


b1 = () => {
    setTimeout(() => {
        return done()
    }, 1 * 1000)
}

done = new Promise((resolve, reject) => {
    return resolve(true);
})

b1().then(()=> {
    b2().then(() => {

    }
})

done = (cb) => {
    cb
}

