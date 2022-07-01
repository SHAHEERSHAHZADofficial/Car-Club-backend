import express from "express"
const PaymentRoute = express.Router()
import Payment from "./../../models/PaymentSchema.js"
PaymentRoute.post("/addPayMent", async (req, res, next) => {
    const PaymentObj = new Payment({

        CardName: req.body.CardName,

        FullName: req.body.FullName,

        CardNumber: req.body.CardNumber,

        Exp_Date: req.body.Exp_Date,

        CVV_Number: req.body.CVV_Number,

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