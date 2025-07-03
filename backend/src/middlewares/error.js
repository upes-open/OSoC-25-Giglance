"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const env_1 = require("@/env");
const errorMiddleware = (err, _req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
_next) => {
    err.message || (err.message = 'Internal Server Error');
    err.statusCode = err.statusCode || 500;
    const response = {
        success: false,
        message: err.message,
    };
    if (env_1.env.NODE_ENV === 'development') {
        response.error = err;
    }
    return res.status(err.statusCode).json(response);
};
exports.errorMiddleware = errorMiddleware;
