import dotenv = require("dotenv");

dotenv.config();

const { PORT } = process.env;

export const config = {
  app: {
    port: PORT || 4000,
  },
};

// module.exports = {
//   config,
// };
