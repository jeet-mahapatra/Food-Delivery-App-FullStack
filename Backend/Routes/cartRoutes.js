import express from "express"
import { addToCart, getCart, removeFromCart } from "../Controllers/cartController.js"
import authMiddleware from "../Middlewares/auth.js";

const cartRouter = express.Router()

cartRouter.post("/add",authMiddleware, addToCart);
cartRouter.post("/remove",authMiddleware, removeFromCart)
cartRouter.post("/get",authMiddleware, getCart)

export default cartRouter;