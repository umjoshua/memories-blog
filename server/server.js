import express from "express";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

const app = express()
const DB_USER = process.env.MONGO_USER; 
const DB_PWD = process.env.MONGODB_URL;
const PORT = process.env.PORT;

const MONGODB_URL = `mongodb+srv://${DB_USER}:${DB_PWD}@cluster0.zevvmfz.mongodb.net/?retryWrites=true&w=majority`;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended:true }));
app.use(cors())

mongoose.connect(MONGODB_URL)