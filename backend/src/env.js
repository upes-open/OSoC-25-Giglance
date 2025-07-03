"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const zod_1 = require("zod");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const envSchema = zod_1.z.object({
    DATABASE_URL: zod_1.z.string().url("DATABASE_URL must be a valid URL"),
    NODE_ENV: zod_1.z.enum(['development', 'test', 'production']).default('development'),
    PORT: zod_1.z.string().transform(Number).pipe(zod_1.z.number().positive()).default('5000'),
});
const validateEnv = () => {
    try {
        return envSchema.parse({
            DATABASE_URL: process.env.DATABASE_URL,
            NODE_ENV: process.env.NODE_ENV,
            PORT: process.env.PORT,
        });
    }
    catch (error) {
        console.error('❌ Invalid environment variables:');
        if (error instanceof zod_1.z.ZodError) {
            error.errors.forEach(err => {
                console.error(`- ${err.path.join('.')}: ${err.message}`);
            });
        }
        else {
            console.error(error);
        }
        process.exit(1);
    }
};
exports.env = validateEnv();
