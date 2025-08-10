import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database";
import routes from "./routes";

dotenv.config();

// Connect to DB
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/", routes);

export default app;
