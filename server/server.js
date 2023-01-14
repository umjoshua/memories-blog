import express from "express";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000;

const MONGODB_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@cluster0.zevvmfz.mongodb.net/MernBlogApp?retryWrites=true&w=majority`;


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended:true }));
app.use(cors())

mongoose.set('strictQuery',true);
mongoose.connect(MONGODB_URL,{useNewUrlParser: true}).then(()=>{
    app.listen(PORT, ()=>{
        console.log("Listening")
    })
}).catch((e)=>{
    console.log(e.message)
})
