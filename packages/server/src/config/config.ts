import dotenv = require("dotenv");

dotenv.config();

const { PORT, MONGO_DB_URL } = process.env;

export const config = {
  app: {
    port: PORT || "4000",
  },
  db: {
    url: MONGO_DB_URL || "",
  },
};
