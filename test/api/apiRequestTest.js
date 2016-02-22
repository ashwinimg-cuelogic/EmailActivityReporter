var assert, apiRequestModule, http;
assert = require('assert');
apiRequestModule = require("./../src/api/apiRequest.js");
http = require('http');

describe('#getVisitorId', function() {
    it('should return error if error is produced in api request', function() {
        var response = apiRequestModule.getVisitorId("en", { 'receiver_email':'arthur@imbull.com' }, function() {});
    });
});

describe('#getVisitorId', function() {
    //require('dotenv').load();
    it('should return error if error is produced in api request', function() {
        var response = apiRequestModule.getVisitorId("en", { 'receiver_email':'arthur@imbull.com' }, function() {});
    });
});

describe('#sendPutVisitorRequest', function() {
    it('should return error if error is produced in api request', function() {
        var response = apiRequestModule.putVisitor("id", 23, { 'receiver_email':'test@test.com' }, function() {});
    });
});
