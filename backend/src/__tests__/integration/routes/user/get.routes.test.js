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
// Remove Prisma mock - we want to use the real database for integration tests
// jest.mock('@/lib/prismaClient', () => ({...}));
describe('GET /api/users', () => {
    // Insert test users before tests
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        // Clear users table to ensure clean state
        yield prismaClient_1.default.user.deleteMany({});
        // Insert our mock data
        for (const user of mockdata_1.mockUsers) {
            yield prismaClient_1.default.user.create({
                data: user
            });
        }
    }));
    // Clean up after tests
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield prismaClient_1.default.user.deleteMany({});
        yield prismaClient_1.default.$disconnect();
    }));
    it('returns users successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(server_1.default)
            .get('/api/users')
            .expect('Content-Type', /json/)
            .expect(200);
        expect(response.body).toMatchObject({
            success: true,
            message: "Users retrieved successfully",
        });
        expect(response.body.data[0]).toHaveProperty('name');
        // Check that we got the right number of users
        expect(response.body.data).toHaveLength(mockdata_1.mockUsers.length);
        // Optionally, verify some properties of returned users
        expect(response.body.data[0]).toHaveProperty('id');
        expect(response.body.data[0]).toHaveProperty('name');
        const typedBody = response.body;
        expect(typedBody.data[0]).toHaveProperty('email');
    }));
});
