var  functions, getVisitorId, PutVisitor, visitorsDataHandler, request, async, getLambdaEventData;

request = require('request');
async = require('async');
initApi = require('./initApi');
visitorsDataHandler = require('./../visitorsDataHandler');
apiResponseHandler = require('./apiResponseHandler');
getLambdaEventData = require('./../getLambdaEventData');


getVisitorId = function(locale, event, parent_next) {
    console.log(initApi.getAPIURL(locale) + 'visitors?api_key=' + initApi.getAPIKey() + '&filter[where][email]=' + event.receiver_email);
    var receiverEmail = getLambdaEventData.getReceiverEmail(event, parent_next);
    request({
        uri: initApi.getAPIURL(locale) + 'visitors?api_key=' + initApi.getAPIKey() + '&filter[where][email]=' + receiverEmail,
        method: 'get',
        headers: { 'content-type': 'application/json' }
    }, function(error, response, body) {
        console.log(body);
        response = apiResponseHandler.handleGetVisitorIdResponse(error, body, event);
        if (response.error)  {
            parent_next(response.error);
        } else {
            parent_next(null, response.visitor, event, locale);
        }
    });
}

putVisitor = function(locale, visitor, event, parent_next) {
    var requestData = visitorsDataHandler.getVisitorsFieldsToUpdate(visitor, parent_next);
    var visitorId = visitorsDataHandler.getVisitorId(visitor, parent_next);
    console.log(visitorId);
    request({
        uri: initApi.getAPIURL(locale) + 'visitors/' + visitorId + "?api_key=" + initApi.getAPIKey(),
        method: 'PUT',
        json: requestData,
        headers: { 'content-type': 'application/json' }
    }, function(error, response, body) {
        console.log(body);
        response = apiResponseHandler.handlePutVisitorResponse(error, body);
        console.log(response);
        if (response.error)  {
            parent_next(response.error);
        } else {
            parent_next();
        }
    });
}

module.exports = {
    getVisitorId: getVisitorId,
    putVisitor: putVisitor
};

