import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import hoodieRoutes from './routes/hoodieRoutes.js';

const app = express();
dotenv.config({path: '../secrets.env'});

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS policy
app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type']
    })
);

app.use('/hoodies', hoodieRoutes);

// Connecting to database
mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => {
        console.log('App connected to database.');
        app.listen(5555, () => {
            console.log('App is listening to port: 5555.');
        });
    })
    .catch((error) => {
        console.log(error);
    })



