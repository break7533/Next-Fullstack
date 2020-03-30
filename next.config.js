/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

module.exports = {
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
        return config;
    }
};
