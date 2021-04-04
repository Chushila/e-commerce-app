"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _address = require("../controllers/address.js");

var _orders = require("../controllers/orders.js");

var _user = require("../controllers/user.js");

var _productOrders = require("../controllers/product-orders.js");

var _middleware = require("../middleware/middleware.js");

var _products = require("../controllers/products.js");

var indexRouter = _express["default"].Router(); // products


indexRouter.get('/products', _products.productsPage); // users

indexRouter.get('/myinfo', _middleware.checkAuthenticated, _user.userByName);
indexRouter.put('/myinfo', _middleware.checkAuthenticated, _user.alterUser);
indexRouter["delete"]('/logout', function (req, res) {
  req.logOut();
  res.redirect('http://localhost:3001/login');
});
indexRouter.get('/login', _middleware.checkNotAuthenticated, function (req, res) {
  res.render('login.ejs');
});
indexRouter.get('/register', _middleware.checkNotAuthenticated, function (req, res) {
  res.render('register.ejs');
});
indexRouter.post('/login', _passport["default"].authenticate('local', {
  successRedirect: 'http://localhost:3001/user',
  failureRedirect: 'http://localhost:3001/login',
  failureFlash: true
}));
indexRouter.post('/register', _user.addUser); // orders

indexRouter.get('/orders:id', _middleware.checkAuthenticated, _productOrders.productsOrdersPage);
indexRouter.get('/orders', _middleware.checkAuthenticated, _orders.orderByUser);
indexRouter.post('/orders', _middleware.checkAuthenticated, _products.addProductsToOrder); // address

indexRouter.post('/addressinfo', _middleware.checkAuthenticated, _address.addAddress);
var _default = indexRouter;
exports["default"] = _default;