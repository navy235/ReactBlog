import config from './'
var serverConfig = {
    mongo: {
        session: {
            url: 'mongodb://localhost/mongosession',
            ttl: 60 * config.userSessionExpire//20 min
        },
        userActivity: {
            url: 'mongodb://localhost/useractivity'
            , schemaVersion: 2
        },
        blog:{
            url: 'mongodb://localhost/blog'
        }
    },
    server: {
        addr: '',
        port: 3000,
        // user activity logger
        logUserActivity: true,
        //enable logger middleware ,it should set to false on production env
        enableLog:true
    }

};
module.exports = serverConfig;