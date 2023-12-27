const path = require('path');
const { merge } = require('webpack-merge');
const commonConfiguration = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Production specific configurations
const productionConfiguration = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist'), // Output directory set to 'dist'
        filename: '[name].[contenthash].js', // Naming convention for output files
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin() // Plugin to clean the 'dist' folder before build
    ]
};

module.exports = merge(commonConfiguration, productionConfiguration);
