'use strict';

var request = require('request');

var Loyalty = function(options) {
    this.url = options.url;
    this.token = options.token;
};

Loyalty.prototype.addLoyaltyPoints = function(payload, callback) {
    request({
        method: 'PUT',
        url: this.url + '/v1/services/loyalty',
        headers: {
            Authorization: this.token
        },
        body: payload,
        json: true
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

Loyalty.prototype.calculateLoyaltyPoints = function(payload, callback) {
    request({
        method: 'GET',
        url: this.url + '/v1/services/loyalty',
        headers: {
            Authorization: this.token
        },
        qs: payload
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

Loyalty.prototype.getLoyaltyPoints = function(user, callback) {
    request({
        method: 'GET',
        url: this.url + '/v1/services/loyalty/summary/' + user,
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

Loyalty.prototype.maximumRedemption = function(payload, callback) {
    request({
        method: 'GET',
        url: this.url + '/v1/services/loyalty/calculate-redemption',
        headers: {
            Authorization: this.token
        },
        qs: payload
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

Loyalty.prototype.redeemPoints = function(payload, callback) {
    request({
        method: 'DELETE',
        url: this.url + '/v1/services/loyalty',
        headers: {
            Authorization: this.token
        },
        body: payload,
        json: true
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

Loyalty.prototype.cancelTransaction = function(transactionid, callback) {
    request({
        method: 'DELETE',
        url: this.url + '/v1/services/loyalty/transaction/' + transactionid,
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

Loyalty.prototype.refundTransaction = function(transactionid, callback) {
    request({
        method: 'PUT',
        url: this.url + '/v1/services/loyalty/transaction/refund/' + transactionid,
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

Loyalty.prototype.refundPartialTransaction = function(transactionid, payload, callback) {
    request({
        method: 'POST',
        url: this.url + '/v1/services/loyalty/transaction/refund/' + transactionid,
        headers: {
            Authorization: this.token
        },
        body: payload,
        json: true
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

module.exports = Loyalty;
