import express from "express"
const BookingRoutes = express.Router()
import Booking from "../models/BookingSchema.js"


BookingRoutes.post("/addBooking", async (req, res, next) => {
    const BookingObj = new Booking({

        BookingNo: req.body.BookingNo,

        Package_Id: req.body.Package_Id,

        SubCategory_Id: req.body.SubCategory_Id,

        Booking_Status: req.body.Booking_Status,

        PackageName: req.body.PackageName,

        PackagePrice: req.body.PackagePrice

    })
    await BookingObj.save()
        .then(result => {
            console.log("data is saved", result)
            res.status(200).json({
                newBooking: result
            })
        }).catch((err) => {
            res.status(500).json({
                error: err
            })
        })

})








BookingRoutes.get("/getBooking/:BookingNo", async (req, res, next) => {

    let { BookingNo } = req.params

    Booking.find({ BookingNo: BookingNo })
        .then(result => {
            res.status(200).json({
                Booking: result
            })
        }).catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })

})











export default BookingRoutes