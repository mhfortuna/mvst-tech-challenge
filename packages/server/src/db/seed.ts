import db = require("../models");

export const seedTotalTime = async (): Promise<void> => {
  console.info("Started seeding total time");
  await db.TotalTime.deleteMany({});
  await db.TotalTime.create({ time: 0, totalLogs: 0 });
  console.info("Finished seeding total time 🔚");
};
