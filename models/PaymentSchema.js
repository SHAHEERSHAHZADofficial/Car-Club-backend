import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    CardName: {
        type: String,
        required: true
    },
    FullName: {
        type: String,
        required: true,
    },
    CardNumber: {
        type: String,
        required: true,
        unique: true
    },
    Exp_Date: {
        type: String,
        required: true,
    },
    CVV_Number: {
        type: String,
        required: true,
        unique: true
    },

})

const Payment = mongoose.model("Car Club Payment", PaymentSchema)

export default Payment