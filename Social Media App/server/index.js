import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/auth.js';

dotenv.config();

const app = express();

// CORS setup
const corsOptions = {
    origin: 'http://localhost:3000', 
    credentials: true,            // access-control-allow-credentials:true
    optionSuccessStatus: 200
};
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors(corsOptions));

// API routes
app.use('/posts', postRoutes);
app.use('/user', userRoutes);

// MongoDB connection string
const conn_url = process.env.MONGO_URI;

mongoose.connect(conn_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(5000, () => console.log("Server Listening and Connected to DB")))
    .catch((error) => console.log(error.message));
