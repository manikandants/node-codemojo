'use strict';

var Gamification = function(credentials) {
    this.credentials = credentials;
};

Gamification.prototype.addAction = function(callback) {
    return callback();
};

Gamification.prototype.addAchievement = function(callback) {
    return callback();
};

Gamification.prototype.getSummary = function(callback) {
    return callback();
};

module.exports = Gamification;
