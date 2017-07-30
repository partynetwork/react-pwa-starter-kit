export default {
    development: (webpack)=>{
        return webpack
    },
    production: (webpack) => {
        webpack.plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    drop_console: true
                }
            })
        )
        return webpack
    }
}
