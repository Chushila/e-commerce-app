"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _passportLocal = _interopRequireDefault(require("passport-local"));

var LocalStrategy = _passportLocal["default"].Strategy;

function initialize(passport, getUserByName, getUserById) {
  var authenticateUser = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(username, password, done) {
      var user;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getUserByName(username);

            case 2:
              user = _context.sent;

              if (!(user == null)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", done(null, false, {
                message: 'No user'
              }));

            case 5:
              _context.prev = 5;
              _context.next = 8;
              return _bcrypt["default"].compare(password, user.password);

            case 8:
              if (!_context.sent) {
                _context.next = 10;
                break;
              }

              return _context.abrupt("return", done(null, user));

            case 10:
              return _context.abrupt("return", done(null, false, {
                message: 'Password or username incorrect'
              }));

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](5);
              return _context.abrupt("return", done(_context.t0));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 13]]);
    }));

    return function authenticateUser(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  passport.use(new LocalStrategy({
    usernameField: 'username'
  }, authenticateUser));
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function (id, done) {
    done(null, getUserById(id));
  });
}

var _default = initialize;
exports["default"] = _default;