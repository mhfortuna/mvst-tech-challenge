import db = require("../models");
import { Request, Response, NextFunction } from "express";

async function getTotal(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await db.TimeRecord.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$time" },
          totalLogs: { $sum: 1 },
        },
      },
      {
        $project: { _id: 0 },
      },
    ]);

    console.log(data);

    res.status(200).send({ data: data[0] });
  } catch (error) {
    let errorMessage = "";
    if (error instanceof Error) {
      errorMessage = error.message;
    } else {
      errorMessage = String(error);
    }
    res.status(500).send({ error: errorMessage });
    next(error);
  }
}

async function add(req: Request, res: Response, next: NextFunction) {
  try {
    const { time }: { time: string } = req.body;
    await db.TimeRecord.create({ time });
    const data = await db.TimeRecord.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$time" },
        },
      },
      {
        $project: { _id: 0 },
      },
    ]);

    res
      .status(200)
      .send({ message: "Successfully added", total: data[0].total });
  } catch (error) {
    let errorMessage = "";
    if (error instanceof Error) {
      errorMessage = error.message;
    } else {
      errorMessage = String(error);
    }
    res.status(400).send({ error: errorMessage });
    next(error);
  }
}

export const timeRecordController = {
  getTotal,
  add,
};
