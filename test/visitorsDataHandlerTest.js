var assert = require('assert'), visitorsDataHandler = require("./../src/visitorsDataHandler.js");

describe('#visitorsDataHandler', function() {

    describe('#visitorsDataHandler', function() {
        it('should call next function when the visitor is not proper object', function() {
            var response = visitorsDataHandler.getVisitorsFieldsToUpdate({}, function() {});
        });

        it('should call next function when the visitor has no field of name mailHardBounceCount', function() {
            var response = visitorsDataHandler.getVisitorsFieldsToUpdate({ 'id': 12 }, function() {});
        });

        it('should return json array in response with status changed to no', function() {
            var response = visitorsDataHandler.getVisitorsFieldsToUpdate({ 'id':12, 'mailHardBounceCount':2, "active": 'Yes' });
            assert.deepEqual(response, { 'mailHardBounceCount':3, "active": 'No', 'inactiveStatusReason': "Hard Bounce" });
        });

        it('should return json array in response with mailHardBounceCount incremented', function() {
            var response = visitorsDataHandler.getVisitorsFieldsToUpdate({ 'id': 12, 'mailHardBounceCount': 1, "active": 'Yes' });
            assert.deepEqual(response, { 'mailHardBounceCount':2 });
        });
    });

    describe('#getVisitorId', function() {
        it('should call next function when the visitor is not proper object', function() {
            var response = visitorsDataHandler.getVisitorId({}, function() { } );
        });

        it('should call next function when the visitor has no field of name id', function() {
            var response = visitorsDataHandler.getVisitorId({ 'name': 12 }, function() { } );
        });
    });
});

