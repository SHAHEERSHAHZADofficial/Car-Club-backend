import mongoose from "mongoose";


const SubCategoriesSchema = new mongoose.Schema({
    SubCategoryName: {
        type: String,
        required: true,
        unique:true
    },
    SubCategoryDescription: {
        type: String,
        required: true,
    },
    Category_Id: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Number,
        default: new Date(),
    },

})
let SubCategories = mongoose.model("Car Club SubCategory", SubCategoriesSchema);

export default SubCategories