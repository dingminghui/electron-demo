const path = require("path");

module.exports = {
    webpack: (config, {isServer}) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname),
            'components': path.resolve(__dirname, 'components'),
            'sass': path.resolve(__dirname, 'sass'),
            'static': path.resolve(__dirname, 'static')
        };
        if (!isServer) {
            config.target = 'electron-renderer';
        }
        return config;
    },
};
