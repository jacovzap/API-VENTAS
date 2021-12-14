import {Schema, model} from 'mongoose'

export class Sale {
    constructor(vendorName, clientName, productName, amount, productPrice, priceCanceled){
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
    calculateCost(){
        return 0;
    }
    showSale(){
        console.log("------------Venta--------------");
        console.log(`Vendor: ${this.vendorName}`);
        console.log(`clientName: ${this.clientName}`);
        console.log(`productName: ${this.productName}`);
        console.log(`amount: ${this.amount}`);
        console.log(`productPrice: ${this.productPrice}`);
        console.log(`priceCanceled: ${this.priceCanceled}`);
     
        console.log(`totalPrice: ${this.totalPrice}`);
        console.log(`inDebt: ${this.inDebt}`);
    }
}



const SaleSchema = new Schema({
    VendorName:{
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
    InDebt:{
        type: String,
        required: true,
        trim: true
    }
},{
    versionKey: false,
    timestamps: true
})


// SaleSchema.loadClass(Sale);

export const SaleModel = model('Sale',SaleSchema);

