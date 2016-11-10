'use strict';

var request = require('request');
var utils = require('./utils');

var Wallet = function(options) {
    this.url = options.url;
    this.token = options.token;
};

Wallet.prototype.addCredits = function(payload, callback) {
    request({
        method: 'PUT',
        url: this.url + '/v1/services/wallet/credits',
        headers: {
            Authorization: this.token
        },
        body: payload,
        json: true
    }, function(err, response, body) {
        utils.responseHandler(err, response, body, callback);
    });
};

Wallet.prototype.deductCredits = function(payload, callback) {
    request({
        method: 'DELETE',
        url: this.url + '/v1/services/wallet/credits',
        headers: {
            Authorization: this.token
        },
        body: payload,
        json: true
    }, function(err, response, body) {
        utils.responseHandler(err, response, body, callback);
    });
};

Wallet.prototype.getBalance = function(user, callback) {
    request({
        method: 'GET',
        url: this.url + '/v1/services/wallet/credits/balance/' + user,
        headers: {
            Authorization: this.token
        }
    }, function(err, response, body) {
        utils.responseHandler(err, response, body, callback);
    });
};

Wallet.prototype.unfreezeTransaction = function(payload, callback) {
    request({
        method: 'POST',
        url: this.url + '/v1/services/wallet/transaction/release',
        headers: {
            Authorization: this.token
        },
        body: payload,
        json: true
    }, function(err, response, body) {
        utils.responseHandler(err, response, body, callback);
    });
};

Wallet.prototype.getTransactionDetail = function(transactionid, callback) {
    request({
        method: 'GET',
        url: this.url + '/v1/services/wallet/transaction/' + transactionid,
        headers: {
            Authorization: this.token
        }
    }, function(err, response, body) {
        utils.responseHandler(err, response, body, callback);
    });
};

Wallet.prototype.getAllTransactions = function(count, callback) {
    request({
        method: 'GET',
        url: this.url + '/v1/services/wallet/transactions/' + count,
        headers: {
            Authorization: this.token
        }
    }, function(err, response, body) {
        utils.responseHandler(err, response, body, callback);
    });
};

Wallet.prototype.getUserTransactions = function(user, count, callback) {
    request({
        method: 'GET',
        url: this.url + '/v1/services/wallet/transactions/' + user + '/' + count,
        headers: {
            Authorization: this.token
        }
    }, function(err, response, body) {
        utils.responseHandler(err, response, body, callback);
    });
};

Wallet.prototype.cancelTransaction = function(transactionid, callback) {
    request({
        method: 'DELETE',
        url: this.url + '/v1/services/wallet/transaction/' + transactionid,
        headers: {
            Authorization: this.token
        }
    }, function(err, response, body) {
        utils.responseHandler(err, response, body, callback);
    });
};

Wallet.prototype.refundTransaction = function(transactionid, callback) {
    request({
        method: 'PUT',
        url: this.url + '/v1/services/wallet/transaction/refund/' + transactionid,
        headers: {
            Authorization: this.token
        }
    }, function(err, response, body) {
        utils.responseHandler(err, response, body, callback);
    });
};

Wallet.prototype.refundPartialTransaction = function(transactionid, payload, callback) {
    request({
        method: 'POST',
        url: this.url + '/v1/services/wallet/transaction/refund/' + transactionid,
        headers: {
            Authorization: this.token
        },
        body: payload,
        json: true
    }, function(err, response, body) {
        utils.responseHandler(err, response, body, callback);
    });
};

module.exports = Wallet;
