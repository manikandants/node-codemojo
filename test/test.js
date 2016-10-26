'use strict';

var CodeMojo = require('../lib/index');

/*var codeMojo = new CodeMojo({
    client_id: '<Your client_id here>',
    client_secret: '<Your client_secret here>',
    grant_type: '<Your grant_type here>'
}, function(err, cm) {
    console.log(cm);
});*/

var cm = new CodeMojo({
    client_id: 'merchant@cartisan.in',
    client_secret: '_WLRIQZp6CGvX6vGcd6URMJHGXXhL62L2NBLCA9J',
    grant_type: 'client_credentials'
}, function(err, codeMojo) {
    console.log(codeMojo.Loyalty);
    /*codeMojo.Loyalty.calculateLoyaltyPoints({
        customer_id: '5583a93c66f7822f6a4de3cf',
        transaction_id: '14544697',
        transaction: 799,
        transaction_type: 1,
        platform: 'android',
        service: 'carwash'
    }, function(err, response) {
        console.log(err, response);
    });
    codeMojo.Loyalty.addLoyaltyPoints({
        customer_id: '5583a93c66f7822f6a4de3cf',
        transaction_id: '14544697',
        transaction: 799,
        transaction_type: 1,
        platform: 'android',
        service: 'carwash'
    }, function(err, response) {
        console.log(err, response);
    });
    codeMojo.Loyalty.getLoyaltyPoints('5583a93c66f7822f6a4de3cf', function(err, response) {
        console.log(err, response);
    });
    codeMojo.Loyalty.maximumRedemption({
        customer_id: '5583a93c66f7822f6a4de3cf',
        transaction_id: '14544697',
        transaction: 799,
        transaction_type: 1,
        platform: 'android',
        service: 'carwash'
    }, function(err, response) {
        console.log(err, response);
    });
    codeMojo.Loyalty.redeemPoints({
        customer_id: '5583a93c66f7822f6a4de3cf',
        transaction_id: '14544697',
        transaction: 799,
        transaction_type: 1,
        platform: 'android',
        service: 'carwash',
        value: 39.95
    }, function(err, response) {
        console.log(err, response);
    });
    codeMojo.Loyalty.cancelTransaction('14544697', function(err, response) {
        console.log(err, response);
    });
    codeMojo.Loyalty.refundTransaction('14544697', function(err, response) {
        console.log(err, response);
    });
    codeMojo.Loyalty.refundPartialTransaction('14544697', {
        value: 100
    }, function(err, response) {
        console.log(err, response);
    });*/
});

console.log(cm);
