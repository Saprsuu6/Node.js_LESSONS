import mongoose from "mongoose";
import config from "./config/main.js";
import expressApp from "./express.js";
import { News } from "./models/models.js";

mongoose
  .connect(config.mongoDB)
  .then(() => {
    console.log("mongoDb connected");
    expressApp();
  })
  .catch((err) => {
    console.log(err);
  });

process.on("SIGINT", () => {
  console.log("SIGINT");
  process.exit(0);
});
