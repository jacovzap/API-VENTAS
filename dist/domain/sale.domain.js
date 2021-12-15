"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saleOnCredit = exports.saleOnCash = void 0;

var _sale = require("../Models/sale");

var _saleOnCash = require("../Models/saleOnCash");

var _saleOnCredit = require("../Models/saleOnCredit");

var saleOnCash = function saleOnCash(req) {
  var sale = new _saleOnCash.SaleOnCash(req.body.VendorName, req.body.ClientName, req.body.VendorProductName, req.body.Amount, req.body.ProductPrice, req.body.PriceCanceled);
  console.log("y aca? ".concat(sale.amount));
  sale.showSale();
  return sale;
};

exports.saleOnCash = saleOnCash;

var saleOnCredit = function saleOnCredit(req) {
  var sale = new _saleOnCredit.SaleOnCredit(req.body.VendorName, req.body.ClientName, req.body.VendorProductName, req.body.Amount, req.body.ProductPrice, req.body.PriceCanceled);
  return sale;
};

exports.saleOnCredit = saleOnCredit;