var hostConfig = require('./host');

var config = {
    userSessionExpire:40,
};
 
config.path_prefix = (hostConfig.instance_name? '/':'')+hostConfig.instance_name;

module.exports = config;