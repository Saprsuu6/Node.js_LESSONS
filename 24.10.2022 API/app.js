import express from "express";
import cors from "cors";
import logger from "logger";
import config from "./config/config.js";
import router_news from "./routes/news.routes.js";
import router_user from "./routes/user.routes.js";

export const my_logger = logger.createLogger("development.log");
const app = express();

app.use(
  cors({
    origin: [`http://localhost:${config.PORT}`], // host from whom wuould be allow request
    credentials: true, // allow any credentials
  })
);

app.use(express.json());
app.use(function (req, res, next) {
  res.header("X-Powered-By", "Apache");
  next();
});
app.use(router_news);
app.use(router_user);
app.use("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(config.PORT, () => {
  my_logger.log("Starting application");
  console.log(`http://localhost:${config.PORT}`);
});
