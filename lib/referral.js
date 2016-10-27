'use strict';

var request = require('request');
var utils = require('./utils');

var Referral = function(options) {
    this.url = options.url;
    this.token = options.token;
};

Referral.prototype.getReferralCode = function(customerid, callback) {
    request({
        method: 'PUT',
        url: this.url + '/v1/services/referral/generate/' + customerid,
        headers: {
            Authorization: this.token
        }
    }, function(err, response, body) {
        utils.responseHandler(err, response, body, callback);
    });
};

Referral.prototype.applyReferralCode = function(customerid, referralcode, callback) {
    request({
        method: 'GET',
        url: this.url + '/v1/services/referral/claim/' + customerid + '/' + referralcode,
        headers: {
            Authorization: this.token
        }
    }, function(err, response, body) {
        utils.responseHandler(err, response, body, callback);
    });
};

Referral.prototype.markActionAsComplete = function(customerid, callback) {
    request({
        method: 'PUT',
        url: this.url + '/v1/services/referral/claim/' + customerid,
        headers: {
            Authorization: this.token
        }
    }, function(err, response, body) {
        utils.responseHandler(err, response, body, callback);
    });
};

module.exports = Referral;
