var getSenderEmail, getReceiverEmail;

getSenderEmail = function(event, next) {
    var sender_email = (event.sender_email) ? event.sender_email : '';
    console.log("sender_email = " + sender_email);
    if ( typeof sender_email === 'undefined' || sender_email === '') {
        next("sender email is not present");
    } else {
        return sender_email;
    }
}

getReceiverEmail = function(event, next) {
    var receiver_email = (event.receiver_email) ? event.receiver_email : '';
    if ( typeof receiver_email === 'undefined' || receiver_email === '') {
        next("receiver email is not present");
    } else {
        return receiver_email;
    }
}
module.exports = {
    getSenderEmail: getSenderEmail,
    getReceiverEmail: getReceiverEmail
};
