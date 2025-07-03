"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockedPrisma = void 0;
const prismaClient_1 = __importDefault(require("@/lib/prismaClient"));
// Mock the Prisma client
jest.mock('@/lib/prismaClient', () => ({
    __esModule: true,
    default: {
        user: {
            findMany: jest.fn(),
            create: jest.fn(),
        },
    },
}));
beforeEach(() => {
    jest.clearAllMocks();
});
exports.mockedPrisma = prismaClient_1.default;
