'use strict';

var request = require('request');

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
        if (err) {
            console.log(err);
            return callback(err);
        }
        if (response.statusCode !== 200) {
            console.log(response.statusCode);
            return callback(response.statusCode);
        }
        return callback(null, body);
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
        if (err) {
            console.log(err);
            return callback(err);
        }
        if (response.statusCode !== 200) {
            console.log(response.statusCode);
            return callback(response.statusCode);
        }
        return callback(null, body);
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
        if (err) {
            console.log(err);
            return callback(err);
        }
        if (response.statusCode !== 200) {
            console.log(response.statusCode);
            return callback(response.statusCode);
        }
        return callback(null, body);
    });
};

module.exports = Referral;
