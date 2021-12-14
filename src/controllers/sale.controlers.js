import {Router} from 'express';
import * as Sale from '../repository/client.repository'


const router = Router();




router.get('/', Sale.getAllSales)

router.post('/onCash', Sale.createSaleOnCash)

router.post('/onCredit', Sale.createSaleOnCredit)

export default router;