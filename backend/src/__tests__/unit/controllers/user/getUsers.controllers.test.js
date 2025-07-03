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
const user_controller_1 = require("@/controllers/user.controller");
const prismaClient_1 = __importDefault(require("@/lib/prismaClient"));
const mockdata_1 = require("@/utils/mockdata");
jest.mock('@/lib/prismaClient', () => ({
    __esModule: true,
    default: {
        user: {
            findMany: jest.fn()
        }
    }
}));
describe('getUsers Controller', () => {
    let mockRequest;
    let mockResponse;
    let mockNext;
    beforeEach(() => {
        mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        mockNext = jest.fn();
        mockRequest = {};
        jest.clearAllMocks();
    });
    it('returns users successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        prismaClient_1.default.user.findMany.mockResolvedValue(mockdata_1.mockUsers);
        yield (0, user_controller_1.getUsers)(mockRequest, mockResponse, mockNext);
        expect(mockResponse.json).toHaveBeenCalledWith({
            success: true,
            data: mockdata_1.mockUsers,
            message: "Users retrieved successfully"
        });
    }));
});
