'use strict';

var Meta = function(token) {
    this.token = token;
};

Meta.prototype.getMeta = function(callback) {
    return callback();
};

Meta.prototype.addMeta = function(callback) {
    return callback();
};

Meta.prototype.updateMeta = function(callback) {
    return callback();
};

Meta.prototype.deleteMeta = function(callback) {
    return callback();
};

module.exports = Meta;
