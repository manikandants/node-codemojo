'use strict';

var request = require('request');

var OAuth = function(options, callback) {
    this.options = options;
    this.getAccessToken(callback);
};

OAuth.prototype.getAccessToken = function(callback) {
    var options = this.options;
    console.log(options);
    request.post({
        url: options.url + '/oauth/access_token',
        body: {
            client_id: options.client_id,
            client_secret: options.client_secret,
            grant_type: options.grant_type
        },
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

module.exports = OAuth;
