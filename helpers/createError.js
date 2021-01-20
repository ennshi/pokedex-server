exports.createError = (status, message) => {
    const newErr = new Error(message);
    newErr.statusCode = status;
    return newErr;
};
