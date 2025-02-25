import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()


const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/food-delivary`)
        console.log(`mongoDB Connected`);
        
    } catch (error) {
        console.log(`MongoDB connection Error`, error);
        
    }
}

export default connectDB;