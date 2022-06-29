import jsonwebtoken from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config()
const auth = (req, res, next) => {
try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token)
    const decoded = jsonwebtoken.verify(token,process.env.ACCESS_TOKEN)
     req.userData = decoded
     next()
} catch (error) {
    return res.status(401).json({message: error.message,
    error:"Auth Failed"})
}

}
export default auth