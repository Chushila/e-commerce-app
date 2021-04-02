import dotenv from 'dotenv';

dotenv.config();

export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
export const sessionSecret = process.env.SESSION_SECRET;
export const appUrl = process.env.APP_URL;
