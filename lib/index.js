'use strict';

var OAuth = require('./oauth');
var DataSync = require('./datasync');
var Gamification = require('./gamification');
var Loyalty = require('./loyalty');
var Meta = require('./meta');
var Referral = require('./referral');
var Wallet = require('./wallet');
var Stopwatch = require('timer-stopwatch');

var urls = {
    sandbox: 'https://sandbox.codemojo.io',
    production: 'https://production.codemojo.io'
};

module.exports = function(options, callback) {
    var CodeMojo = function() {};
    options = options || {};
    if (!options.client_id) {
        return console.error('client_id is required.');
    }
    if (!options.client_secret) {
        return console.error('client_secret is required.');
    }
    options.grant_type = options.grant_type || 'client_credentials';
    options.mode = options.mode || 'sandbox';
    options.url = options.url || urls[options.mode];
    CodeMojo.prototype.OAuth = new OAuth(options, function(err, oauth) {
        if (err) {
            return callback(err);
        }
        options.token = oauth.token_type + ' ' + oauth.access_token;
        var timer = new Stopwatch((oauth.expires_in - 60) * 1000);
        timer.start();
        timer.onDone(function() {
            console.log('Timer is complete');
            CodeMojo.prototype.OAuth = new OAuth(options, function(err, oauth) {
                if (err) {
                    return callback(err);
                }
                options.token = oauth.token_type + ' ' + oauth.access_token;
                console.log(options.token);
                CodeMojo.DataSync = new DataSync(options);
                CodeMojo.Gamification = new Gamification(options);
                CodeMojo.Loyalty = new Loyalty(options);
                CodeMojo.Meta = new Meta(options);
                CodeMojo.Referral = new Referral(options);
                CodeMojo.Wallet = new Wallet(options);
                timer.reset((oauth.expires_in - 60) * 1000);
                timer.start();
            });
        });
        CodeMojo.DataSync = new DataSync(options);
        CodeMojo.Gamification = new Gamification(options);
        CodeMojo.Loyalty = new Loyalty(options);
        CodeMojo.Meta = new Meta(options);
        CodeMojo.Referral = new Referral(options);
        CodeMojo.Wallet = new Wallet(options);
        callback(err, CodeMojo);
    });
};
