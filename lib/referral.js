'use strict';

var Referral = function(token) {
    this.token = token;
};

Referral.prototype.generateReferralCode = function(callback) {
    return callback();
};

Referral.prototype.useReferralCode = function(callback) {
    return callback();
};

Referral.prototype.markActionComplete = function(callback) {
    return callback();
};

module.exports = Referral;
