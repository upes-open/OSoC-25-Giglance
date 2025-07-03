"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const env_1 = require("@/env");
const axios_1 = __importDefault(require("axios"));
const BASE_URL = env_1.env.NEXT_PUBLIC_SERVER_API_URL || "http://localhost:5000";
exports.api = axios_1.default.create({
    baseURL: `${BASE_URL}/api`,
    headers: {
        "Content-Type": "application/json",
    },
});
