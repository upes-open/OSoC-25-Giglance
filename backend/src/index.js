"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("@/env");
const server_1 = __importDefault(require("@/server/server"));
const PORT = env_1.env.PORT;
server_1.default.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
