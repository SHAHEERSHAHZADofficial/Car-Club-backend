import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true,
    },
    ContactNumber: {
        type: Number,
        required: true,
        unique:true
    },
    Address: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        unique:true
    },
    UserName: {
        type: String,
        required:true,
        unique:true
    },
    Password: {
        type: String,
        required: true

    },
    createdAt: {
        type: Number,
        default: new Date(),
    },

})
let NewUser = mongoose.model("Car Club User", UserSchema);

export default NewUser