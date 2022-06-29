import mongoose from "mongoose";

const FeedBackSchema= new mongoose.Schema({
    FeedBack:{
        type:String,
        required: true,
    },   
      FeedBack_Date: {
        type: Number,
        default: new Date(),
    },
    U_id:{
        type:Number,
        required:true
    }
})


const FeedBack = mongoose.model("Car Club FeedBack",FeedBackSchema)

export default FeedBack

