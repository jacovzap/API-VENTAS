"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./routes/app"));

require("./database/database");

require("dotenv");

_app["default"].set('port', process.env.PORT || 8080);

_app["default"].listen(_app["default"].get('port'));

console.log('Server on port', _app["default"].get('port')); // import {Sale} from "../src/Models/sale";
// import {SaleOnCash} from "../src/Models/saleOnCash"
// import {SaleOnCredit} from "../src/Models/saleOnCredit"
// let venta = new Sale("Jacobo", "Juan", "Canasta", 5, 10, 40);
// let venta2 = new SaleOnCredit("Jacobo", "Juan", "Canasta", 5, 10, 40);
// venta = venta2;
// venta.showSale();
// venta2.showSale();