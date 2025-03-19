const express=require('express')
const authMiddleware = require('../middleware/authMiddleware')
const { addToCart, getCart, removeFromCart } = require('../controllers/cartController')


const CartRouter=express.Router()
CartRouter.post("/add",authMiddleware,addToCart)
CartRouter.get("/",authMiddleware,getCart)
CartRouter.post("/remove",authMiddleware,removeFromCart)
module.exports=CartRouter
