var  assert = require('assert'); getLocalCode = require('./../src/getLocalCode');

describe('#getLocalCode', function() {
    describe('#fromSenderEmail',function() {
        it('should call next function when the sender_email does not contain local',function() {
            var local = getLocalCode.fromSenderEmail("test@test.com", function() { });
        });

        it('should return local when the sender_email contains local',function() {
            var local = getLocalCode.fromSenderEmail("contact.id@flipit.com");
            assert.equal(local, 'id');
        });

        it('should return en when the sender_email contains kortingscode',function() {
            var local = getLocalCode.fromSenderEmail("nieuws@kortingscode.nl");
            assert.equal(local, 'en');
        });
    });
});
