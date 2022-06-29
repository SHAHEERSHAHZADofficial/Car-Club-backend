import mongoose from "mongoose";



const BookingSchema = new mongoose.Schema({

    Package_Id: {
        type: String,
        required: true,
    },
    SubCategory_Id: {
        type: String,
        required: true,
    },
    Booking_date: {
        type: Number,
        default: new Date(),
    },
    Booking_Status: {
        type: String,
        required: true,
    },
    BookingNo: {
        type: Number,
        required: true
    },
    PackageName: {
        type: String,
        required: true
    },
    PackagePrice: {
        type: String,
        required: true
    }

})
let Booking = mongoose.model("Car Club Booking", BookingSchema);

export default Booking