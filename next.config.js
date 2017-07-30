import webpackConfig from 'webpack.config'

module.exports = {
    webpack: webpackConfig[process.env.NODE_ENV]
}
