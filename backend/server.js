import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

const app=express();
connectDB();

app.use(cors({
  origin: "https://leader-board-theta.vercel.app/",
  credentials: true
}));

app.use(express.json());

app.listen(5000,()=>{
    console.log(`Port running.`);
});

app.use('/',userRoutes);