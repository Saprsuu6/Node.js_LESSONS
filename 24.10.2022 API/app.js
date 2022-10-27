import express from "express";
import router from "./routes/routes.js";
import logger from "logger";

import config from "./config/config.js";

export const my_logger = logger.createLogger("development.log");
const app = express();

app.use(express.json());
app.use(router);
app.use("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(config.PORT, () => {
  my_logger.log("Starting application");
  console.log(`http://localhost:${config.PORT}`);
});
