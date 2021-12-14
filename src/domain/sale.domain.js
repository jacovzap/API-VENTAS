import {Sale} from "../Models/sale"
import {SaleOnCash} from "../Models/saleOnCash"
import {SaleOnCredit} from "../Models/saleOnCredit"




export const saleOnCash = (req) => {
    let sale = new SaleOnCash(
        req.body.VendorName,
        req.body.ClientName,
        req.body.VendorProductName,
        req.body.Amount,
        req.body.ProductPrice,
        req.body.PriceCanceled,
    )
    console.log(`y aca? ${sale.amount}`)
    sale.showSale();
    return sale
}


export const saleOnCredit = req => {
    let sale = new SaleOnCredit(
        req.body.VendorName,
        req.body.ClientName,
        req.body.VendorProductName,
        req.body.Amount,
        req.body.ProductPrice,
        req.body.PriceCanceled,
    )
    return sale
}