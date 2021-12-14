import {SaleModel} from '../Models/sale';
import * as SaleInstance from '../domain/sale.domain'


export const getAllSales = async (req, res)=> {
    const sales = await SaleModel.find();
    res.json(sales)
};

export const createSaleOnCash = async (req, res) => {
    let saleOnCash = SaleInstance.saleOnCash(req)
    console.log('aqui llega', saleOnCash.VendorName)
    const newSaleOnCash = new SaleModel({VendorName: saleOnCash.vendorName,
        ClientName: saleOnCash.clientName,
        ProductName: saleOnCash.productName,
        Amount: saleOnCash.amount,
        ProductPrice: saleOnCash.productPrice,
        PriceCanceled: saleOnCash.priceCanceled,
        Others: saleOnCash.others,
        TotalPrice: saleOnCash.totalPrice,
        InDebt: saleOnCash.inDebt
    })
    const saleSaved = await newSaleOnCash.save();
    res.json(saleSaved);
    // console.log('saving a new client');
}

export const createSaleOnCredit = async (req, res) => {
    let saleOnCredit = SaleInstance.saleOnCredit(req)
    const newSaleOnCredit = new SaleModel({VendorName: saleOnCredit.vendorName,
        ClientName: saleOnCredit.clientName,
        ProductName: saleOnCredit.productName,
        Amount: saleOnCredit.amount,
        ProductPrice: saleOnCredit.productPrice,
        PriceCanceled: saleOnCredit.priceCanceled,
        Others: saleOnCredit.others,
        TotalPrice: saleOnCredit.totalPrice,
        InDebt: saleOnCredit.inDebt
    })
    const saleSaved = await newSaleOnCredit.save();
    res.json(saleSaved);
    // console.log('saving a new client');
}

