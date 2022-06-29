import http from "http"
import app from "./app.js"
const Server = http.createServer(app)

import dotenv from "dotenv"




dotenv.config()

const Port = process.env.port

Server.listen(Port,()=>{
    console.log(`============Server Started On ${Port}============`)
})