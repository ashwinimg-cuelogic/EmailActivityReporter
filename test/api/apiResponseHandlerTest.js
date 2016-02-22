var assert = require('assert'), functionModule = require("./../src/api/apiResponseHandler.js");

describe('apiResponseHandler', function() {
    describe('#handleGetVisitorIdResponse', function() {
        it('should return error if error is produced in api request', function() {
            var response = functionModule.handleGetVisitorIdResponse("error");
            assert.deepEqual(response, { 'error':"error" });
        });

        it('should return error if invalid json object is passed by api request', function() {
            var response = functionModule.handleGetVisitorIdResponse(null, "{'':}");
            assert.deepEqual(response, { "error":"parse error" });
        });

        it('should return error if 200 response is not returned by api request', function() {
            var response = functionModule.handleGetVisitorIdResponse(null, '{"code": 400, "messages": "pages not found"}');
            assert.deepEqual(response, { "error":"API Response returns pages not found" });
        });

        it('should return error if response is not valid', function() {
            var response = functionModule.handleGetVisitorIdResponse(null, '{}', { 'receiver_email':'test@test.com' });
            assert.deepEqual(response, { "error":"NO Visitor found with the given email address test@test.com" });
        });

        it('should return response with visitor id if valid data is passed by api request', function() {
            var response = functionModule.handleGetVisitorIdResponse(null, '{"_embedded":{"visitor":[{"id":4591}]}}');
            assert.deepEqual(response, { "id":4591 });
        });

    });

    describe('#handlePutVisitorResponse', function() {
        it('should return error if error is produced in api request', function() {
            var response = functionModule.handlePutVisitorResponse("error");
            assert.deepEqual(response, { 'error':"error" });
        });

        it('should return error if 200 response is not returned by api request', function() {
            var response = functionModule.handlePutVisitorResponse(null, { "code": 400, "messages": "pages not found" });
            assert.deepEqual(response, { "error":"API Response returns pages not found" });
        });

        it('should return response with visitor id if valid data is passed by api request', function() {
            var response = functionModule.handlePutVisitorResponse(null, { "_embedded":{ "visitor":[ { "id":4591 } ] } });
            assert.deepEqual(response, { "_embedded":{ "visitor":[ { "id":4591 } ] } });
        });
    });
});

