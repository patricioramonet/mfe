const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')


const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8081/'
    },
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: '/index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8082/remoteEntry.js',
                auth: 'auth@http://localhost:8083/remoteEntry.js',
                dashboard: 'dashboard@http://localhost:8084/remoteEntry.js'
            },
            shared: packageJson.dependencies //compartir dependencias desde packages
        })
    ]
}

module.exports = merge(commonConfig, devConfig)