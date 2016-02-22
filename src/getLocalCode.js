var fromSenderEmail, _;
_ = require('lodash');

fromSenderEmail = function(senderEmail, next) {
    localIndex = _.indexOf(senderEmail, '.');
    atIndex = _.indexOf(senderEmail, '@');
    localCode = '';
    if (localIndex === -1 || localIndex > atIndex) {
        if (senderEmail.indexOf('kortingscode') > atIndex) {
            localCode = "en";
        }
    } else {
        localCode = senderEmail.substring(localIndex + 1, atIndex);
    }
    if (typeof localCode ===  'undefined' || localCode === '') {
        next("sender email does not contain locale information.");
    }
    return localCode;
}

module.exports = {
    fromSenderEmail: fromSenderEmail
};
