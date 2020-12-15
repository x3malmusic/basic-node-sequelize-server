import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDB } from "./database"
import { errorHandler } from "./middlewares/errorHandler";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/users"


const app = express();
dotenv.config();

connectToDB()

const port = process.env.PORT || 8000;

app.use(express.json({ extended: true }));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/api", authRoutes, userRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`server is running on ${port} port`));
