import express from "express";
import mongoose from "mongoose";
import router from "./routes/user.routes.js"
import cors from "cors"
import bodyParser from "body-parser";
import dotenv from "dotenv"
dotenv.config({path:'./config.env'})
const app = express()
app.use(cors("*"));

const PORT = 5000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use("/api", router)


mongoose.connect("mongodb+srv://aliyasmuhammad1122:aliyassajid@cluster0.cifooiu.mongodb.net/final-project")
console.log("Database connected")
mongoose.connection.once("connected",()=>{
    app.listen(PORT,()=>{
        console.log(`connected to ${PORT}`)
    })
})