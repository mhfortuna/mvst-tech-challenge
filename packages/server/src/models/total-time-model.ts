import mongoose, { Schema } from "mongoose";

const totalTimeSchema = new Schema(
  {
    time: {
      type: Number,
      required: [true, "The time is a required parameter"],
    },
    totalLogs: {
      type: Number,
      required: [true, "Total logs is a required parameter"],
    },
  },
  {
    strict: true,
    timestamps: true,
  },
);

export const TotalTime = mongoose.model("totalTime", totalTimeSchema);
