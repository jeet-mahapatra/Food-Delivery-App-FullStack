import express from "express"
import cors from "cors"
import connectDB from "./Config/db.js"
import dotenv from "dotenv";
import foodRouter from "./Routes/foodRoutes.js";
import userRouter from "./Routes/userRoutes.js";
import cartRouter from "./Routes/cartRoutes.js";
import { orderRouter } from "./Routes/orderRoutes.js";
dotenv.config()




// app config

const app = express()

// cors
app.use(cors(
    {
        origin: ["https://food-delivary-app-full-stack-frontend-three.vercel.app","https://food-delivary-app-full-stack-admin.vercel.app/order"],
        methods:["POST","GET"],
        credentials:true
    }
))



// middleware

app.use(express.json())
app.use(cors())

// DB Connections

connectDB();

// api endpoints

app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})


const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server Started on http://localhost:${PORT}`)
})

// mongodb+srv://jeetvictus:<db_password>@cluster0.fty5p.mongodb.net/