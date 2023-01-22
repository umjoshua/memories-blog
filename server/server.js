import express from "express";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

//Routes
import PostRoutes from './routes/Posts.js';

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000;

const MONGODB_URL = process.env.CONNECTION_URL;


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended:true }));
app.use(cors())

app.use('/posts',PostRoutes);

mongoose.set('strictQuery',true);
mongoose.connect(MONGODB_URL,{useNewUrlParser: true}).then(()=>{
    app.listen(PORT, ()=>{
        console.log("Listening")
    })
}).catch((e)=>{
    console.log(e.message)
})
