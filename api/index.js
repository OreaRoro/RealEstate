import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';

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
    });

    app.use("/api/user", userRoutes);
    app.use("/api/auth", authRoutes);

    app.use((err, req, res, next) => {
        const statusCode = err.statusCode || 500;
        const message = err.message || "Internal server Error";

        return  res.status(statusCode).json({
            success: false,
            statusCode,
            message
        })
    })