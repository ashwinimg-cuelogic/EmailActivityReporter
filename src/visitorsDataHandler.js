var getVisitorsFieldsToUpdate, getVisitorId, _;
_ = require('lodash');

getVisitorsFieldsToUpdate = function(visitor, next) {
    var requestData = {};
    if (typeof visitor !== 'object' || visitor == '' || _.isEmpty(visitor)) {
        next("Invalid Visitor Object");
    }
    if (typeof visitor.mailHardBounceCount === 'undefined' || visitor.mailHardBounceCount === '') {
        next("Invalid Visitor information");
    }
    requestData.mailHardBounceCount =  parseInt(visitor.mailHardBounceCount) + 1;
    if (requestData.mailHardBounceCount >= 3) {
        requestData.active               = "No";
        requestData.inactiveStatusReason = "Hard Bounce";
    }
    return requestData;
}

getVisitorId = function(visitor, next) {
    var visitorId = '';
    if (typeof visitor !== 'object' || visitor == '' || _.isEmpty(visitor)) {
        next("Invalid Visitor Object");
    }
    if (typeof visitor.id === 'undefined' || visitor.id === '') {
        next("Invalid Visitor id");
    }
    visitorId = visitor.id;
    return visitorId;
}

module.exports = {
    getVisitorsFieldsToUpdate: getVisitorsFieldsToUpdate,
    getVisitorId: getVisitorId
};
