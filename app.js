import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from 'dotenv';
import UserRoute from "./UserRouting/UserRoute.js"
import HomeRoute from "./UserRouting/HomeRoute.js";
import CategoryRoutes from "./Private/Categories/Categories.js"
import SubCategoryRoutes from "./Private/SubCategories/SubCategories.js"
import PackageRoutes from "./Private/Package/Package.js"
import BookingRoutes from "./Private/Booking/Booking.js";
dotenv.config()

const app = express()
app.use(
    cors({
        origin: true,
        credentials: true
    })
)

mongoose.connect(process.env.MongoDb)
mongoose.connection.once("open", () => {
    console.log('=================== Secrete Database Connected ===================');
})
mongoose.connection.on("error", () => {
    console.log('=================== Black Vigo Is Outside ( You Are UnderArrest ) ===================');

})

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.use("/User", UserRoute)
app.use("/Categories", CategoryRoutes)
app.use("/SubCategories", SubCategoryRoutes)
app.use("/Package", PackageRoutes)
app.use("/Booking", BookingRoutes)
app.use("/Payment", PackageRoutes)




// Error  🤦‍♂️🤦‍♂️

app.use((req, res, next) => {
    res.status(404).json({
        Error: "🤬🤬🤬🤬🤬🤬 URL Not Found 🤬🤬🤬🤬🤬🤬"
    })
})

export default app