"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkNotAuthenticated = exports.checkAuthenticated = void 0;

var checkAuthenticated = function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('http://localhost:3001/login');
};

exports.checkAuthenticated = checkAuthenticated;

var checkNotAuthenticated = function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect('/v1/orders');
  }

  next();
};

exports.checkNotAuthenticated = checkNotAuthenticated;