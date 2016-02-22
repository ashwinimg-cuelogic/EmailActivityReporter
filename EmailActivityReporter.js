exports.handler = function(event, context) {
    console.log("inside the handler");

    require('dotenv').load();
    var apiRequest, getLambdaEventData, async, getLocaleCode;

    apiRequest = require('./src/api/apiRequest');
    getLambdaEventData = require('./src/getLambdaEventData');
    getLocaleCode = require('./src/getLocalCode');
    async = require('async');

    async.waterfall([
        function getSenderEmail(next) {

            var sender_email = getLambdaEventData.getSenderEmail(event, next);
            next(null, sender_email);

        }, function getLocalCode(sender_email, next) {

            var locale = getLocaleCode.fromSenderEmail(sender_email, next);
            next(null, locale, event);

        }, function getVisitorId(locale, event, next) {

            console.log("inside the api request to get the visitor id");
            apiRequest.getVisitorId(locale, event, next);

        }, function sendPutVisitorRequest(visitor_id, event, locale, next) {
            console.log("inside the put api request");
            apiRequest.putVisitor(locale, visitor_id, event, next);

        } ], function(err) {
            if (err) {
                console.error(
                    err
                );
                context.done(err);
            } else {
                console.log("successfully invoked.");
                context.done(null, "success");
            }
        }
    );
}
