import express from 'express'
import { createProduct,  findproductById, getAllProduct} from '../controller/productController.js'
import { uploads } from '../config/cloudinary.js'
import { isLoggedIn } from '../middleware/isLoggedIn.js';





export const productRoute= express.Router()

// productRoute.post('/createProduct',uploads.single('image'), createProduct)
productRoute.post('/createProduct', uploads.array('images', 5), createProduct);
productRoute.get('/getallproduct',getAllProduct)
 productRoute.get('/findById/:id',  findproductById)
