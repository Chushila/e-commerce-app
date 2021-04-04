"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductsOfOrder = exports.addProductsToOrder = exports.productsPage = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _uuid = require("uuid");

var _model = _interopRequireDefault(require("../models/model.js"));

var _orders = require("./orders.js");

var productModel = new _model["default"]('products');

var productsPage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return productModel.select('id, name, price, price, quantity,image');

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

  return function productsPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.productsPage = productsPage;

var addProductsToOrder = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _yield$req$user, username, _yield$req$body, cart, total, columns, date, id, values, order;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return req.user;

          case 3:
            _yield$req$user = _context2.sent;
            username = _yield$req$user.username;
            _context2.next = 7;
            return req.body;

          case 7:
            _yield$req$body = _context2.sent;
            cart = _yield$req$body.cart;
            total = _yield$req$body.total;
            columns = 'time_ordered,users,id,total';
            date = new Date(Date.now());
            id = (0, _uuid.v4)();
            values = "'".concat(date.toUTCString(), "','").concat(username, "','").concat(id, "',").concat(total);
            _context2.next = 16;
            return _orders.orderModel.insertWithReturn(columns, values);

          case 16:
            order = _context2.sent;
            cart.forEach(function (element) {
              var value = [Number(element.id), "'".concat(id, "'"), Number(element.quantityInCart)];
              productModel.insertInCustomTable('products_orders', value);
            });
            res.status(204);
            _context2.next = 24;
            break;

          case 21:
            _context2.prev = 21;
            _context2.t0 = _context2["catch"](0);
            res.status(200).json({
              messages: _context2.t0.stack
            });

          case 24:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 21]]);
  }));

  return function addProductsToOrder(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.addProductsToOrder = addProductsToOrder;

var getProductsOfOrder = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return productModel.select('id, name, price, price, quantity, image');

          case 3:
            data = _context3.sent;
            res.status(200).json({
              messages: data.rows
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            res.status(200).json({
              messages: _context3.t0.stack
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function getProductsOfOrder(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getProductsOfOrder = getProductsOfOrder;