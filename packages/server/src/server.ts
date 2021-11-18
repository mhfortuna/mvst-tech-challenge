import express from "express";
import cors from "cors";
import helmet from "helmet";
import { config } from "./config";
import { timeRecordRouter } from "./routes";

export const app = express();

app.use(express.json());
app.use(helmet());
const options: cors.CorsOptions = {
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,POST",
  origin: config.client.url,
  preflightContinue: false,
};

app.use(cors(options));

app.use("/api/time", timeRecordRouter);
