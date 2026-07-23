import express from 'express'
import type { Application } from 'express';
import { authRouter } from './routes/auth.routes.js';
import cookieParser from "cookie-parser";
import cors from "cors";




export const app:Application = express();
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());


app.use("/api/auth",authRouter)

