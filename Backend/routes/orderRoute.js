import express from "express";
import { placeOrder, placeOrderStripe, placeOrderRazorpay, allorders, userOrders, updateStatus, verifyStripe } from '../controllers/orderController.js'
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/Auth.js";


const orderRouter = express.Router()

//Admin Features
orderRouter.post('/list', adminAuth, allorders)
orderRouter.post('/status', adminAuth, updateStatus)

//payment Features
orderRouter.post('/place',authUser, placeOrder)
orderRouter.post('/stripe',authUser, placeOrderStripe)
orderRouter.post('/razorpay',authUser, placeOrderRazorpay)

// User Feature
orderRouter.post('/userorders', authUser, userOrders)

//verify payment
orderRouter.post('/verifyStripe', authUser, verifyStripe )

export default orderRouter