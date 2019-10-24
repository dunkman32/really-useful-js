const tryCatch = callback => async (req, res, next) => {
    try {
        const promise = callback(req, res, next);
        if (!(promise instanceof Promise)) return promise;
        await promise;
    } catch (e) {
        next(e);
    }
};

module.exports = {
    tryCatch,
}