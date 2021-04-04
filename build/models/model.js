"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _pool = require("./pool.js");

var _queryFunctions = require("../utils/queryFunctions.js");

var Model = /*#__PURE__*/function () {
  function Model(table) {
    (0, _classCallCheck2["default"])(this, Model);
    this.pool = _pool.pool;
    this.table = table;
    this.pool.on('error', function (err, client) {
      return "Error, ".concat(err, ", on idle client").concat(client);
    });
  }

  (0, _createClass2["default"])(Model, [{
    key: "select",
    value: function () {
      var _select = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(columns, clause) {
        var query;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "SELECT ".concat(columns, " FROM ").concat(this.table);
                if (clause) query += clause;
                return _context.abrupt("return", this.pool.query(query));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function select(_x, _x2) {
        return _select.apply(this, arguments);
      }

      return select;
    }()
  }, {
    key: "insertWithReturn",
    value: function () {
      var _insertWithReturn = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(columns, values) {
        var query;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = "\n          INSERT INTO ".concat(this.table, "(").concat(columns, ")\n          VALUES (").concat(values, ")\n          RETURNING id, ").concat(columns, "\n      ");
                return _context2.abrupt("return", this.pool.query(query));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function insertWithReturn(_x3, _x4) {
        return _insertWithReturn.apply(this, arguments);
      }

      return insertWithReturn;
    }()
  }, {
    key: "alterTable",
    value: function () {
      var _alterTable = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(input, clause) {
        var qArray, _i, _Object$entries, _Object$entries$_i, key, value, query;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                qArray = [];

                for (_i = 0, _Object$entries = Object.entries(input); _i < _Object$entries.length; _i++) {
                  _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
                  query = "\n          UPDATE ".concat(this.table, "\n          SET ").concat(key, " = '").concat(value, "'\n      ");
                  if (clause) query += clause;
                  qArray.push(query);
                }

                return _context3.abrupt("return", (0, _queryFunctions.executeQueryArray)(qArray));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function alterTable(_x5, _x6) {
        return _alterTable.apply(this, arguments);
      }

      return alterTable;
    }()
  }, {
    key: "getLastId",
    value: function () {
      var _getLastId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(username, clause) {
        var query;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                query = "WITH get_max(max_id) AS (SELECT MAX(id) FROM orders WHERE users = '".concat(username, "')\n    SELECT id\n    FROM orders,get_max\n    WHERE orders.id = get_max.max_id;");
                if (clause) query += clause;
                return _context4.abrupt("return", this.pool.query(query));

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getLastId(_x7, _x8) {
        return _getLastId.apply(this, arguments);
      }

      return getLastId;
    }()
  }, {
    key: "insertInCustomTable",
    value: function () {
      var _insertInCustomTable = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(table, values) {
        var query;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                query = "\n          INSERT INTO ".concat(table, "\n          VALUES (").concat(values, ")\n          \n      ");
                return _context5.abrupt("return", this.pool.query(query));

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function insertInCustomTable(_x9, _x10) {
        return _insertInCustomTable.apply(this, arguments);
      }

      return insertInCustomTable;
    }()
  }]);
  return Model;
}();

var _default = Model;
exports["default"] = _default;