"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lastOrderId = exports.orderByUser = exports.orderById = exports.ordersPage = exports.orderModel = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _model = _interopRequireDefault(require("../models/model.js"));

var orderModel = new _model["default"]('orders');
exports.orderModel = orderModel;

var ordersPage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return orderModel.select('id, time_ordered, users');

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

  return function ordersPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.ordersPage = ordersPage;

var orderById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _yield$req$params, id, data;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return req.params;

          case 3:
            _yield$req$params = _context2.sent;
            id = _yield$req$params.id;
            _context2.next = 7;
            return orderModel.select('id, time_ordered', " WHERE id = ".concat(id.slice(1)));

          case 7:
            data = _context2.sent;
            res.status(200).json({
              messages: data.rows
            });
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            res.status(200).json({
              messages: _context2.t0.stack
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function orderById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.orderById = orderById;

var orderByUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _yield$req$user, username, data;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return req.user;

          case 3:
            _yield$req$user = _context3.sent;
            username = _yield$req$user.username;
            _context3.next = 7;
            return orderModel.select('id, time_ordered, users, total', " WHERE users = '".concat(username, "'"));

          case 7:
            data = _context3.sent;
            res.status(200).json({
              messages: data.rows
            });
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            res.status(200).json({
              messages: _context3.t0.stack
            });

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));

  return function orderByUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.orderByUser = orderByUser;

var lastOrderId = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(username) {
    var data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return orderModel.getLastId(username);

          case 3:
            data = _context4.sent;
            return _context4.abrupt("return", data.rows[0].id);

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function lastOrderId(_x7) {
    return _ref4.apply(this, arguments);
  };
}();

exports.lastOrderId = lastOrderId;