var  assert = require('assert'), getLambdaEventData = require('./../src/getLambdaEventData');

describe('#getLambdaEventData', function() {
    describe('#getSenderEmail', function() {
        it('should call to next functionwhen sender email is not specified', function() {
            var response = getLambdaEventData.getSenderEmail({}, function() {
            });
        });

        it('should return sender email if specified in event object', function() {
            var response = getLambdaEventData.getSenderEmail({ 'sender_email': 'test@test.com' });
            assert.equal(response, 'test@test.com');
        });
    });

    describe('#getReceiverEmail', function() {
        it('should call to next functionwhen sender email is not specified', function() {
            var response = getLambdaEventData.getReceiverEmail({}, function() {
            });
        });

        it('should return sender email if specified in event object', function() {
            var response = getLambdaEventData.getReceiverEmail({ 'receiver_email': 'test@test.com' });
            assert.equal(response, 'test@test.com');
        });
    });
});
