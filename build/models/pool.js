"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pool = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _pg = _interopRequireDefault(require("pg"));

var Pool = _pg["default"].Pool;

_dotenv["default"].config();

var devConfig = {
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
};
var productionConfig = {
  connectionString: process.env.DATABASE_URL // heroku addon

};
var pool = new Pool(process.env.NODE_ENV === 'production' ? productionConfig : devConfig);
exports.pool = pool;