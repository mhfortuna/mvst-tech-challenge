import express from "express";
import cors from "cors";
import helmet from "helmet";
import { timeRecordRouter } from "./routes";

export const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use("/api/time", timeRecordRouter);
