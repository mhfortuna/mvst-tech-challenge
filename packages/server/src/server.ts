import express from "express";
import cors from "cors";
// const helmet = require("helmet");
// const morgan = require ("morgan");
import { timeRecordRouter } from "./routes";
// const {
//   authRouter,
//   contentRouter,
//   categoryRouter,
//   searchRouter,
// } = require("./routes");

export const app = express();

app.use(express.json());
// app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ limit: "10mb", extended: true }));
// app.use(morgan("dev"));
// app.use(helmet());
app.use(cors());

app.use("/api/time", timeRecordRouter);
// app.use("/api/content", contentRouter);
// app.use("/api/category", categoryRouter);
// app.use("/api/search", searchRouter);
