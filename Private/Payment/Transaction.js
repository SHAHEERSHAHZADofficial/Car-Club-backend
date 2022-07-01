import express from "express"
const PaymentRoute = express.Router()
import Payment from "./../../models/PackageSchema"
PaymentRoute.post("/addPayMent", async (req, res, next) => {
    const PaymentObj = new Payment({

        BookingNo: req.body.BookingNo,

        Package_Id: req.body.Package_Id,

        SubCategory_Id: req.body.SubCategory_Id,

        Booking_Status: req.body.Booking_Status,

        PackageName: req.body.PackageName,

        PackagePrice: req.body.PackagePrice,

        UserName: req.bady.UserName,
    })
    await PaymentObj.save()
        .then(result => {
            console.log("data is saved", result)
            res.status(200).json({
                Payment: result
            })
        }).catch((err) => {
            res.status(500).json({
                error: err
            })
        })

})









PaymentRoute.get("/getPaymentCard", async (req, res) => {
    let UserName = req.body.UserName
    Payment.findOne({ UserName: UserName })
        .then((result) => {
            res.status(200).json({
                Payment: result
            })
        }).catch((err) => {
            console.error(err)
            res.status(500).json({
                msg: err
            })
        });
})


export default PaymentRoute