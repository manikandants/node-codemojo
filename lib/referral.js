'use strict';

var Referral = function(options) {
    this.url = options.url;
    this.token = options.token;
};

Referral.prototype.getReferralCode = function(callback) {
    return callback();
};

Referral.prototype.applyReferralCode = function(callback) {
    return callback();
};

Referral.prototype.markActionAsComplete = function(callback) {
    return callback();
};

module.exports = Referral;
