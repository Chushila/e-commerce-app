"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAddress = exports.addressPage = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _uuid = require("uuid");

var _model = _interopRequireDefault(require("../models/model.js"));

var _user = require("./user.js");

var addressModel = new _model["default"]('delivery_address');

var addressPage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return addressModel.select('name, message');

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

  return function addressPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.addressPage = addressPage;

var addAddress = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, _yield$req$user, username, _req$body, street_num, street_name, apt_number, city, state, zip_code, columns, values, data, userData, userChange;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = (0, _uuid.v4)();
            _context2.next = 3;
            return req.user;

          case 3:
            _yield$req$user = _context2.sent;
            username = _yield$req$user.username;
            _req$body = req.body, street_num = _req$body.street_num, street_name = _req$body.street_name, apt_number = _req$body.apt_number, city = _req$body.city, state = _req$body.state, zip_code = _req$body.zip_code;
            columns = 'street_num,street_name,apt_number,city,state,zip_code,id';
            values = "'".concat(street_num, "','").concat(street_name, "','").concat(apt_number, "','").concat(city, "','").concat(state, "','").concat(zip_code, "','").concat(id, "'");
            _context2.prev = 8;
            _context2.next = 11;
            return addressModel.insertWithReturn(columns, values);

          case 11:
            data = _context2.sent;
            userData = {
              address_id: id
            };
            _context2.next = 15;
            return (0, _user.alterUserLocally)(userData, username);

          case 15:
            userChange = _context2.sent;
            res.status(200).json({
              messages: data.rows
            });
            _context2.next = 22;
            break;

          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2["catch"](8);
            res.status(200).json({
              messages: _context2.t0.stack
            });

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[8, 19]]);
  }));

  return function addAddress(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.addAddress = addAddress;