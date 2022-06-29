import mongoose from "mongoose";


const CategoriesSchema = new mongoose.Schema({


    CategoryName: {
        type: String,
        required: true,
        unique: true
    },
    CategoryDescription: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Number,
        default: new Date(),
    },


})


let Categories = mongoose.model("Car Club Category", CategoriesSchema);


export default Categories