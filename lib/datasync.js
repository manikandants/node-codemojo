'use strict';

var DataSync = function(token) {
    this.token = token;
};

DataSync.prototype.createDataSync = function(callback) {
    return callback();
};

DataSync.prototype.deleteDataSync = function(callback) {
    return callback();
};

module.exports = DataSync;
