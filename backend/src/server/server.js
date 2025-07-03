"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const env_1 = require("@/env");
const user_routes_1 = __importDefault(require("@/routes/user.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use((0, helmet_1.default)({
    contentSecurityPolicy: env_1.env.NODE_ENV !== 'development',
    crossOriginEmbedderPolicy: env_1.env.NODE_ENV !== 'development',
}));
app.get('/api', (_req, res) => {
    res.json({ message: 'Hello from the backend API' });
});
app.use('/api/users', user_routes_1.default);
// 404 handler
app.use((_req, res) => {
    res.status(404).json({
        success: false,
        message: 'Page not found',
    });
});
exports.default = app;
