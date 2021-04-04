"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alterUserLocally = exports.alterUser = exports.getUserById = exports.userByName = exports.userByNamePass = exports.addUser = exports.userPage = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _uuid = require("uuid");

var _model = _interopRequireDefault(require("../models/model.js"));

var userModel = new _model["default"]('customers');

var userPage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return userModel.select('customer_name, customer_surname, username,verification');

          case 3:
            data = _context.sent;
            res.status(200).json({
              messages: data.rows
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.status(200).json({
              messages: _context.t0.stack
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function userPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.userPage = userPage;

var addUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, name, surname, email, username, password, columns, hashedPas, values;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, surname = _req$body.surname, email = _req$body.email, username = _req$body.username, password = _req$body.password;
            columns = 'customer_name, customer_surname, email, username, password,id';
            _context2.prev = 2;
            _context2.next = 5;
            return _bcrypt["default"].hash(password, 10);

          case 5:
            hashedPas = _context2.sent;
            values = "'".concat(name, "', '").concat(surname, "', '").concat(email, "', '").concat(username, "', '").concat(hashedPas, "','").concat((0, _uuid.v4)(), "'");
            _context2.next = 9;
            return userModel.insertWithReturn(columns, values);

          case 9:
            res.redirect('https://localhost:3001/login');
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](2);
            res.status(200).json({
              messages: _context2.t0.stack
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 12]]);
  }));

  return function addUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.addUser = addUser;

var userByNamePass = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(user) {
    var data, output;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return userModel.select('username,password,id', " WHERE username = '".concat(user, "'"));

          case 3:
            data = _context3.sent;
            output = {
              user: data.rows
            };
            return _context3.abrupt("return", output.user[0]);

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function userByNamePass(_x5) {
    return _ref3.apply(this, arguments);
  };
}();

exports.userByNamePass = userByNamePass;

var userByName = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _yield$req$user, username, data;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return req.user;

          case 3:
            _yield$req$user = _context4.sent;
            username = _yield$req$user.username;
            _context4.next = 7;
            return userModel.select('customer_name, customer_surname, username,verification, email, phone', " WHERE username = '".concat(username, "'"));

          case 7:
            data = _context4.sent;
            res.status(200).json({
              messages: data.rows
            });
            _context4.next = 14;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            res.status(200).json({
              messages: _context4.t0.stack
            });

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 11]]);
  }));

  return function userByName(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();

exports.userByName = userByName;

var getUserById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var data, output;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return userModel.select('username,password,id', " WHERE id = '".concat(id, "'"));

          case 3:
            data = _context5.sent;
            output = {
              user: data.rows
            };
            return _context5.abrupt("return", output.user[0]);

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));

  return function getUserById(_x8) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getUserById = getUserById;

var alterUser = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var input, _yield$req$user2, username;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            input = req.body;
            _context6.next = 3;
            return req.user;

          case 3:
            _yield$req$user2 = _context6.sent;
            username = _yield$req$user2.username;
            _context6.prev = 5;

            if (!input.password) {
              _context6.next = 10;
              break;
            }

            _context6.next = 9;
            return _bcrypt["default"].hash(input.password, 10);

          case 9:
            input.password = _context6.sent;

          case 10:
            _context6.next = 12;
            return userModel.alterTable(input, "WHERE username = '".concat(username, "';"));

          case 12:
            res.status(201).redirect('http://localhost:3001/user');
            _context6.next = 18;
            break;

          case 15:
            _context6.prev = 15;
            _context6.t0 = _context6["catch"](5);
            res.status(200).json({
              messages: _context6.t0.stack
            });

          case 18:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[5, 15]]);
  }));

  return function alterUser(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();

exports.alterUser = alterUser;

var alterUserLocally = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(input, username) {
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return userModel.alterTable(input, "WHERE username = '".concat(username, "';"));

          case 3:
            _context7.next = 8;
            break;

          case 5:
            _context7.prev = 5;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);

          case 8:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 5]]);
  }));

  return function alterUserLocally(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();

exports.alterUserLocally = alterUserLocally;