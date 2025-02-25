import mongoose from "mongoose"

const foodSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        }
    }
)

export const FoodModel =mongoose.models.food || mongoose.model("Food",foodSchema);