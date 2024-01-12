import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Server running on port: ${PORT}`);
            }
        })
    })
    .catch((error) => {
        console.log(error);
    })