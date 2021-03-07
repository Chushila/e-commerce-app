import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  database: 'CommerceApp',
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
