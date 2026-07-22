import express from 'express'
import type { Application } from 'express';
import { authRouter } from './routes/auth.routes.js';
import cookieParser from "cookie-parser";


export const app:Application = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRouter)

