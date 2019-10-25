//try Catch
const tryCatch = callback => async (req, res, next) => {
    try {
        const promise = callback(req, res, next);
        if (!(promise instanceof Promise)) return promise;
        await promise;
    } catch (e) {
        next(e);
    }
};
//Error
class AppError extends Error {
    constructor(message, status) {
      super(message);
      this.name = this.constructor.name;
      Error.captureStackTrace(this, this.constructor);
      this.message = message;
      this.status = status || 500;
    }
  };

// Array
const addElementAtIntex = (array, index, element) => array.splice(index, 0, element);

const removeElementFromArray = (array, element) => array.filter(value => value !== element)

module.exports = {
    tryCatch,
    AppError,
    addElementAtIntex,
    removeElementFromArray,
}