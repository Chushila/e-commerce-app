"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _morgan = _interopRequireDefault(require("morgan"));

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _passport = _interopRequireDefault(require("passport"));

var _expressFlash = _interopRequireDefault(require("express-flash"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _cryptoRandomString = _interopRequireDefault(require("crypto-random-string"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _methodOverride = _interopRequireDefault(require("method-override"));

var _index = _interopRequireDefault(require("./routes/index.js"));

var _user = require("./controllers/user.js");

var _passportConfig = _interopRequireDefault(require("./utils/passport-config.js"));

(0, _passportConfig["default"])(_passport["default"], _user.userByNamePass, _user.getUserById);
var app = (0, _express["default"])();
app.set('view-engine', 'ejs');
app.use((0, _expressFlash["default"])());
app.use((0, _expressSession["default"])({
  secret: (0, _cryptoRandomString["default"])({
    length: 10
  }),
  resave: false,
  saveUninitialized: false
}));
app.use(_passport["default"].initialize());
app.use(_passport["default"].session());
app.use((0, _cors["default"])({
  credentials: true,
  origin: 'http://localhost:3001'
}));
app.use((0, _methodOverride["default"])('_method'));
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use((0, _cookieParser["default"])());
app.use('/v1', _index["default"]);
app.use(function (err, req, res, next) {
  res.status(400).json({
    error: err.stack
  });
  next();
});

if (process.env.NODE_ENV === 'production') {
  app.use(_express["default"]["static"](_path["default"].join(process.cwd(), 'client/build')));
}

app.get('*', function (req, res) {
  res.sendFile(_path["default"].join(process.cwd(), 'client/build/index.html'));
});
var _default = app;
exports["default"] = _default;