import express from "express"
const CardDetailRoute = express.Router()
import Payment from "./../../models/PackageSchema"
CardDetailRoute.post("/addBooking", async (req, res, next) => {
    const PaymentObj = new Payment({

        BookingNo: req.body.BookingNo,

        Package_Id: req.body.Package_Id,

        SubCategory_Id: req.body.SubCategory_Id,

        Booking_Status: req.body.Booking_Status,

        PackageName: req.body.PackageName,

        PackagePrice: req.body.PackagePrice

    })
    await PaymentObj.save()
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
