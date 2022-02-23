import latToGeo from "./latToGeo";

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

const randomString = length => [...Array(length)].map(i => (~~(Math.random() * 36)).toString(36)).join('')

const multiClass = (...args) => args.join(' ')

const hexToRgb = hex => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.trim());
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

const getTextColor = color => {
    const rgb = hexToRgb(color);
    if (rgb) {
        const o = Math.round(((parseInt(rgb.r) * 299) +
            (parseInt(rgb.g) * 587) +
            (parseInt(rgb.b) * 114)) / 1000);
        return (o > 125) ? "black" : "white";
    }
};

const testEmail = email => {
    return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}


module.exports = {
    tryCatch,
    AppError,
    addElementAtIntex,
    removeElementFromArray,
    randomString,
    multiClass,
    getTextColor,
    latToGeo,
    testEmail
}
