"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productsOrdersPage = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _model = _interopRequireDefault(require("../models/model.js"));

var productOrdersModel = new _model["default"]('products_orders');

var productsOrdersPage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _yield$req$params, id, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return req.params;

          case 3:
            _yield$req$params = _context.sent;
            id = _yield$req$params.id;
            _context.next = 7;
            return productOrdersModel.select('order_id, product_id, product_amount', " WHERE order_id = '".concat(id.slice(1), "'"));

          case 7:
            data = _context.sent;
            res.status(200).json({
              messages: data.rows
            });
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            res.status(200).json({
              messages: _context.t0.stack
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function productsOrdersPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.productsOrdersPage = productsOrdersPage;