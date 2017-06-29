const path = require('path');
module.exports = function(rootDir){
    global.__rootDir = rootDir;
    global.__production = (process.env.NODE_ENV === "production");
    global.requireRes = function (name) {
        return require(path.join(__rootDir, 'res', name));
    };
    global.requireServ = function (name) {
        return require(path.join(__rootDir, 'server', name));
    };
};