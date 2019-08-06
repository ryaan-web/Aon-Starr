exports.devServer = ({ host, port } = {}) => ({
    contentBase: path.join(__dirname, "../dist"),
        compress: true,
        port: port,
        host: host,
        watchContentBase: true,
        progress: true,
        hot: true
});