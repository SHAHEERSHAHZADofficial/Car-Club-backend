import mongoose from "mongoose";


const PackageSchema = new mongoose.Schema({
    PackageName: {
        type: String,
        required: true,
        unique:true
    },
    PackageDescription: {
        type: String,
        required: true,
    },
    PackagePrice:{
    type:String,
    required:true
    },
    SubCategory_Id: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Number,
        default: new Date(),
    },

})
let Package = mongoose.model("Car Club Package", PackageSchema);

export default Package