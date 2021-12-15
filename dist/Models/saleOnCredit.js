"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SaleOnCredit = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _sale = require("./sale");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SaleOnCredit = /*#__PURE__*/function (_Sale) {
  (0, _inherits2["default"])(SaleOnCredit, _Sale);

  var _super = _createSuper(SaleOnCredit);

  function SaleOnCredit(vendorName, clientName, productName, amount, productPrice, priceCanceled) {
    (0, _classCallCheck2["default"])(this, SaleOnCredit);
    return _super.call(this, vendorName, clientName, productName, amount, productPrice, priceCanceled);
  }

  (0, _createClass2["default"])(SaleOnCredit, [{
    key: "calculateCost",
    value: function calculateCost() {
      this.creditPercentage = 0.05;
      this.others = this.productPrice * this.amount * this.creditPercentage;
      this.totalPrice = this.productPrice * this.amount + this.others;
      this.inDebt = this.totalPrice - this.priceCanceled;
    }
  }, {
    key: "showSale",
    value: function showSale() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(SaleOnCredit.prototype), "showSale", this).call(this);
      console.log("others: ".concat(this.others));
    }
  }]);
  return SaleOnCredit;
}(_sale.Sale);

exports.SaleOnCredit = SaleOnCredit;