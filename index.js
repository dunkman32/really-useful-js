const tryCatch = callback => async (req, res, next) => {
    try {
        const promise = callback(req, res, next);
        if (!(promise instanceof Promise)) return promise;
        await promise;
    } catch (e) {
        next(e);
    }
};
class AppError extends Error {
    constructor(message, status) {
      super(message);
      this.name = this.constructor.name;
      Error.captureStackTrace(this, this.constructor);
      this.message = message;
      this.status = status || 500;
    }
  };

module.exports = {
    tryCatch,
    AppError,
}