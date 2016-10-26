'use strict';

var Wallet = function(token) {
    this.token = token;
};

Wallet.prototype.addCredits = function(callback) {
    return callback();
};

Wallet.prototype.deductCredits = function(callback) {
    return callback();
};

Wallet.prototype.getBalance = function(callback) {
    return callback();
};

Wallet.prototype.unfreezeTransaction = function(callback) {
    return callback();
};

Wallet.prototype.getTransactionDetail = function(callback) {
    return callback();
};

Wallet.prototype.getAllTransactions = function(callback) {
    return callback();
};

Wallet.prototype.getUserTransactions = function(callback) {
    return callback();
};

Wallet.prototype.cancelTransaction = function(callback) {
    return callback();
};

Wallet.prototype.refundTransaction = function(callback) {
    return callback();
};

Wallet.prototype.refundPartialTransaction = function(callback) {
    return callback();
};

module.exports = Wallet;
