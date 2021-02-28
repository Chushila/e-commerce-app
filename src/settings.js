import dotenv from 'dotenv';

export const connectionString = process.env.CONNECTION_STRING;

dotenv.config();

export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
