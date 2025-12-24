import express from "express"
import { createCategory, findCategory } from "../controller/categoryController.js"
import { isLoggedIn } from "../middleware/isLoggedIn.js"
import { isAdmin } from "../middleware/isAdmin.js"


export const categoryRoute= express.Router()

categoryRoute.post('/createCategory',isLoggedIn,isAdmin,createCategory)
categoryRoute.get('/findCategory',findCategory)
