import {Sale} from "./sale"


export class SaleOnCredit extends Sale{
    

    constructor(vendorName, clientName, productName, amount, productPrice, priceCanceled){
        super(vendorName, clientName, productName, amount, productPrice, priceCanceled);
    }
    calculateCost(){
        this.creditPercentage = 0.05;
        this.others = this.productPrice * this.amount * this.creditPercentage;
        this.totalPrice = (this.productPrice * this.amount) + this.others;
        this.inDebt = this.totalPrice - this.priceCanceled;
    }   
    showSale(){
        super.showSale();
        console.log(`others: ${this.others}`);
    }
}

