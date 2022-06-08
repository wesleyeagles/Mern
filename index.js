import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app = express()
dotenv.config()


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connect to mongoDB")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("Disconnected", ()=> {
    console.log("mongoDB Disconnected!")
})

mongoose.connection.on("Connected", ()=> {
    console.log("mongoDB Connected!")
})


app.listen(8800, () => {
    connect()
    console.log("Connected to backend")
})