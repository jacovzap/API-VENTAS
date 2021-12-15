"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllSales = exports.createSaleOnCredit = exports.createSaleOnCash = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _sale = require("../Models/sale");

var SaleInstance = _interopRequireWildcard(require("../domain/sale.domain"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getAllSales = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var sales;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _sale.SaleModel.find();

          case 2:
            sales = _context.sent;
            res.json(sales);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAllSales(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllSales = getAllSales;

var createSaleOnCash = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var saleOnCash, newSaleOnCash, saleSaved;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            saleOnCash = SaleInstance.saleOnCash(req);
            console.log('aqui llega', saleOnCash.VendorName);
            newSaleOnCash = new _sale.SaleModel({
              VendorName: saleOnCash.vendorName,
              ClientName: saleOnCash.clientName,
              ProductName: saleOnCash.productName,
              Amount: saleOnCash.amount,
              ProductPrice: saleOnCash.productPrice,
              PriceCanceled: saleOnCash.priceCanceled,
              Others: saleOnCash.others,
              TotalPrice: saleOnCash.totalPrice,
              InDebt: saleOnCash.inDebt
            });
            _context2.next = 5;
            return newSaleOnCash.save();

          case 5:
            saleSaved = _context2.sent;
            res.json(saleSaved); // console.log('saving a new client');

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createSaleOnCash(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createSaleOnCash = createSaleOnCash;

var createSaleOnCredit = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var saleOnCredit, newSaleOnCredit, saleSaved;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            saleOnCredit = SaleInstance.saleOnCredit(req);
            newSaleOnCredit = new _sale.SaleModel({
              VendorName: saleOnCredit.vendorName,
              ClientName: saleOnCredit.clientName,
              ProductName: saleOnCredit.productName,
              Amount: saleOnCredit.amount,
              ProductPrice: saleOnCredit.productPrice,
              PriceCanceled: saleOnCredit.priceCanceled,
              Others: saleOnCredit.others,
              TotalPrice: saleOnCredit.totalPrice,
              InDebt: saleOnCredit.inDebt
            });
            _context3.next = 4;
            return newSaleOnCredit.save();

          case 4:
            saleSaved = _context3.sent;
            res.json(saleSaved); // console.log('saving a new client');

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function createSaleOnCredit(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createSaleOnCredit = createSaleOnCredit;