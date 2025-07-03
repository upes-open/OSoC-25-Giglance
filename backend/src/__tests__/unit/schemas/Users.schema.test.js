"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mockdata_1 = require("@/utils/mockdata");
const zod_1 = require("zod");
const UserSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string().min(1),
    email: zod_1.z.string().email(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date()
});
describe('User Schema', () => {
    it('validates correct user data', () => {
        const result = UserSchema.safeParse(Object.assign(Object.assign({ id: '1' }, mockdata_1.mockUserData.valid), { createdAt: new Date(), updatedAt: new Date() }));
        expect(result.success).toBe(true);
    });
    it('fails with invalid data', () => {
        const result = UserSchema.safeParse(Object.assign(Object.assign({ id: '1' }, mockdata_1.mockUserData.invalid), { createdAt: new Date(), updatedAt: new Date() }));
        expect(result.success).toBe(false);
    });
});
