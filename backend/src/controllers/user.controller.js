"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUsers = void 0;
const prismaClient_1 = __importDefault(require("@/lib/prismaClient"));
const exceptionHandler_1 = require("@/utils/exceptionHandler");
const welcomeTemplate_1 = require("../lib/Templates/welcomeTemplate");
const resend_1 = require("resend");
const resend = new resend_1.Resend(process.env.RESEND_API_KEY);
exports.getUsers = (0, exceptionHandler_1.TryCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prismaClient_1.default.user.findMany();
    res.json({
        success: true,
        data: users,
        message: "Users retrieved successfully",
    });
}));
exports.createUser = (0, exceptionHandler_1.TryCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    const user = yield prismaClient_1.default.user.create({
        data: {
            name,
            email,
        },
    });
    const { subject, html } = (0, welcomeTemplate_1.welcomeTemplate)({ name: user.name || 'there' });
    yield resend.emails.send({
        from: 'welcome@giglance.com',
        to: user.email,
        subject,
        html,
    });
    res.status(201).json({
        success: true,
        data: user,
        message: 'User created successfully',
    });
}));
