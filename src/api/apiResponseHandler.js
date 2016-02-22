var handleGetVisitorIdResponse, handlePutVisitorResponse;

handleGetVisitorIdResponse = function(error, visitor_data, event) {
    if (error) {
        return { "error": error };
    }
    try{
        visitor_data = JSON.parse(visitor_data);
        if (typeof visitor_data.code !== 'undefined' &&  visitor_data.code !== 200) {
            return { "error": "API Response returns " + visitor_data.messages };
        }
        if (visitor_data === '' || typeof visitor_data._embedded === 'undefined') {
            return { "error": "NO Visitor found with the given email address " + event.receiver_email };
        }
        return { "visitor": visitor_data._embedded.visitors[0] };
    } catch(error) {
        return { "error": "parse error" };
    }
}

handlePutVisitorResponse = function(error, visitor_data) {
    if (error) {
        return { "error": error };
    }
    if (typeof visitor_data.code !== 'undefined' &&  visitor_data.code !== 200) {
        return { "error": "API Response returns " + visitor_data.messages };
    }
    return visitor_data;
}
module.exports = {
    handleGetVisitorIdResponse: handleGetVisitorIdResponse,
    handlePutVisitorResponse: handlePutVisitorResponse
};