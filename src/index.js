import app from './routes/app'
import './database/database'
import 'dotenv'


app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'))
console.log('Server on port', app.get('port'))



// import {Sale} from "../src/Models/sale";
// import {SaleOnCash} from "../src/Models/saleOnCash"
// import {SaleOnCredit} from "../src/Models/saleOnCredit"


// let venta = new Sale("Jacobo", "Juan", "Canasta", 5, 10, 40);
// let venta2 = new SaleOnCredit("Jacobo", "Juan", "Canasta", 5, 10, 40);


// venta = venta2;

// venta.showSale();
// venta2.showSale(); 