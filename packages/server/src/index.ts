import { app } from "./server";
import { config } from "./config";
// import config  from "./config";
// const {
// seedCategories,
// seedContent,
// } = require("./db/seed");

app.listen(config.app.port, () => {
  console.log(`Server running at port ${config.app.port}`);
});
