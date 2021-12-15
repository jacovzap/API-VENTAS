"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SaleModel = exports.Sale = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _mongoose = require("mongoose");

var Sale = /*#__PURE__*/function () {
  function Sale(vendorName, clientName, productName, amount, productPrice, priceCanceled) {
    (0, _classCallCheck2["default"])(this, Sale);
    this.vendorName = vendorName;
    this.clientName = clientName;
    this.productName = productName;
    this.amount = amount;
    this.productPrice = productPrice;
    this.priceCanceled = priceCanceled;
    this.others = 0;
    this.totalPrice = 0;
    this.inDebt = 0;
    this.calculateCost();
  }

  (0, _createClass2["default"])(Sale, [{
    key: "calculateCost",
    value: function calculateCost() {
      return 0;
    }
  }, {
    key: "showSale",
    value: function showSale() {
      console.log("------------Venta--------------");
      console.log("Vendor: ".concat(this.vendorName));
      console.log("clientName: ".concat(this.clientName));
      console.log("productName: ".concat(this.productName));
      console.log("amount: ".concat(this.amount));
      console.log("productPrice: ".concat(this.productPrice));
      console.log("priceCanceled: ".concat(this.priceCanceled));
      console.log("totalPrice: ".concat(this.totalPrice));
      console.log("inDebt: ".concat(this.inDebt));
    }
  }]);
  return Sale;
}();

exports.Sale = Sale;
var SaleSchema = new _mongoose.Schema({
  VendorName: {
    type: String,
    required: true,
    trim: true
  },
  ClientName: {
    type: String,
    required: true,
    trim: true
  },
  ProductName: {
    type: String,
    required: true,
    trim: true
  },
  Amount: {
    type: String,
    required: true,
    trim: true
  },
  ProductPrice: {
    type: String,
    required: true,
    trim: true
  },
  PriceCanceled: {
    type: String,
    required: true,
    trim: true
  },
  Others: {
    type: String,
    required: true,
    trim: true
  },
  TotalPrice: {
    type: String,
    required: true,
    trim: true
  },
  InDebt: {
    type: String,
    required: true,
    trim: true
  }
}, {
  versionKey: false,
  timestamps: true
}); // SaleSchema.loadClass(Sale);

var SaleModel = (0, _mongoose.model)('Sale', SaleSchema);
exports.SaleModel = SaleModel;