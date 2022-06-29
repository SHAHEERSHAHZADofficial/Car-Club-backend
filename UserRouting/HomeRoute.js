import express  from "express"; 
import auth from "../middleware/auth.js";
const HomeRoute = express.Router()


// //  😘😘  Home Page  😘😘

HomeRoute.get("/",auth,(req,res,next)=>{
    res.status(200).json({
        Message:"😘😘 Access Granted To Home Page 😘😘"
    })
})



export default HomeRoute