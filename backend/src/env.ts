import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  DATABASE_URL: z.string().url("DATABASE_URL must be a valid URL"),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.string().transform(Number).pipe(z.number().positive()).default('5000'),
  MAIL_NAME: z.string().min(1, "MAIL_NAME is required"),
  MAIL_ID: z.string().email("MAIL_ID must be a valid email"),
  MAIL_PASSWORD: z.string().min(1, "MAIL_PASSWORD is required"),
});

const validateEnv = () => {
  try {
    return envSchema.parse({
      DATABASE_URL: process.env.DATABASE_URL,
      NODE_ENV: process.env.NODE_ENV,
      PORT: process.env.PORT,
      MAIL_NAME: process.env.MAIL_NAME,
      MAIL_ID: process.env.MAIL_ID,
      MAIL_PASSWORD: process.env.MAIL_PASSWORD,

    });
  } catch (error) {
    console.error('❌ Invalid environment variables:');
    if (error instanceof z.ZodError) {
      error.errors.forEach(err => {
        console.error(`- ${err.path.join('.')}: ${err.message}`);
      });
    } else {
      console.error(error);
    }
    process.exit(1);
  }
};

export const env = validateEnv();