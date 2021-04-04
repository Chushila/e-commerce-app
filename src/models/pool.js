import dotenv from 'dotenv';
import pg from 'pg';
const {Pool} = pg;

dotenv.config();

const devConfig = {
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
};

const productionConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  } // heroku addon
};
export const pool = new Pool(
  process.env.NODE_ENV === 'production' ? productionConfig : devConfig
);
