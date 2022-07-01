import express from "express";
const FeedbackRoute = express.Router()
import FeedBack from "../../models/FeedBack.js"

FeedbackRoute.post("/addFeedBack", async (req, res) => {

    const FeedBackObj = new FeedBack({
        FeedBack: req.body.FeedBack,
        User_id: req.body.User_id
    })

    await FeedBackObj.save()
        .then(result => {
            console.log("data is saved", result)
            res.status(200).json({
                FeedBack: result
            })
        }).catch((err) => {
            res.status(500).json({
                error: err
            })
        })

})


export default FeedbackRoute