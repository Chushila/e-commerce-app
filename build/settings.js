"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appUrl = exports.sessionSecret = exports.testEnvironmentVariable = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
exports.testEnvironmentVariable = testEnvironmentVariable;
var sessionSecret = process.env.SESSION_SECRET;
exports.sessionSecret = sessionSecret;
var appUrl = process.env.APP_URL;
exports.appUrl = appUrl;