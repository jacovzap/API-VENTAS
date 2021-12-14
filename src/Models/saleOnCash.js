import {Sale} from "./sale"


export class SaleOnCash extends Sale{
    

    constructor(vendorName, clientName, productName, amount, productPrice, priceCanceled){
        super(vendorName, clientName, productName, amount, productPrice, priceCanceled);
    }
    calculateCost(){
        this.totalPrice = (this.productPrice * this.amount) + this.others;
        this.inDebt = this.totalPrice - this.priceCanceled;
    }   

}
