'use strict';

var Gamification = function(credentials) {
    this.credentials = credentials;
};

Gamification.prototype.addActions = function(callback) {
    return callback();
};

Gamification.prototype.addAchievements = function(callback) {
    return callback();
};

Gamification.prototype.getUserSummary = function(callback) {
    return callback();
};

module.exports = Gamification;
