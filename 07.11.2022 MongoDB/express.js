import express from "express";
import config from "./config/main.js";
import router from "./routes/routes.js";

const expressApp = () => {
  const app = express();
  app.use(express.json());
  app.use(router);

  app.listen(config.port, () => {
    console.log(`http://localhost:${config.port}`);
  });
};

export default expressApp;
