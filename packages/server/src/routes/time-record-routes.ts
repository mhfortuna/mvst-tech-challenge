import { Router } from "express";
import { timeRecordController } from "../controllers";

export const timeRecordRouter = Router();

timeRecordRouter.get("", timeRecordController.getTotal);
timeRecordRouter.post("", timeRecordController.add);
