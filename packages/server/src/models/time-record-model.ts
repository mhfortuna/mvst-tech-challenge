import mongoose, { Schema } from "mongoose";

const timeRecordSchema = new Schema(
  {
    time: {
      type: Number,
      required: [true, "The time is the only required parameter"],
    },
  },
  {
    strict: true,
    timestamps: true,
  },
);

export const TimeRecord = mongoose.model("timeRecord", timeRecordSchema);
