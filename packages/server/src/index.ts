import { app } from "./server";
import { config } from "./config";
import { connect } from "./db/connect";

// import config  from "./config";
// const {
// seedCategories,
// seedContent,
// } = require("./db/seed");

connect().then(async () => {
  app.listen(config.app.port, () => {
    console.log(`Server running at port ${config.app.port}`);
  });
});
