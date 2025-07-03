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
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("@/server/server"));
const prismaClient_1 = __importDefault(require("@/lib/prismaClient"));
const mockdata_1 = require("@/utils/mockdata");
jest.mock('@/lib/prismaClient', () => ({
    __esModule: true,
    default: {
        user: {
            create: jest.fn(),
        },
    },
}));
describe('POST /api/users', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('creates a user successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        prismaClient_1.default.user.create.mockResolvedValue(mockdata_1.mockCreatedUser);
        const response = yield (0, supertest_1.default)(server_1.default)
            .post('/api/users')
            .send(mockdata_1.mockUserData.valid)
            .expect('Content-Type', /json/)
            .expect(201);
        expect(response.body).toEqual({
            success: true,
            data: {
                id: mockdata_1.mockCreatedUser.id,
                email: mockdata_1.mockCreatedUser.email,
                name: mockdata_1.mockCreatedUser.name,
                createdAt: mockdata_1.mockCreatedUser.createdAt.toISOString(),
                updatedAt: mockdata_1.mockCreatedUser.updatedAt.toISOString(),
            },
            message: 'User created successfully'
        });
        expect(prismaClient_1.default.user.create).toHaveBeenCalledWith({
            data: mockdata_1.mockUserData.valid
        });
    }));
});
