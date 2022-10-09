import express from "express";
import MyTask from "./resources/models/task.js";
import { tasks } from "./server.js";
//import httpClient from "http";

const router = express.Router();
const urlencodedParser = express.urlencoded({ extended: false });

router
  .route("/")
  .get((req, res) => {
    res.sendFile(path.resolve(__dirname, "resources", "index.html"));
  })
  .post((req, res) => {
    const task = new MyTask(
      req.body.name,
      req.body.terms,
      req.body.describe,
      req.body.tags != undefined ? req.body.tags.split(",") : undefined,
      req.body.priority
    );
    //httpClient.post("http://localhost:3000/tasks", task);
    tasks.push(task);
    res.send(JSON.stringify(task));
  })
  .delete((req, res) => {
    const index = req.body.index;
    tasks.splice(index, 1);
    res.send(JSON.stringify(index));
  })
  .put((req, res) => {
    const index = req.body.index;
    const task = new MyTask(
      req.body.name,
      req.body.terms,
      req.body.describe,
      req.body.tags != undefined ? req.body.tags.split(",") : undefined,
      req.body.priority
    );
    tasks[index] = task;
    res.send(
      JSON.stringify({
        index,
        task,
      })
    );
  });

router.route("/createProject").get((req, res) => {
  res.sendFile(path.resolve(__dirname, "resources", "index.html"));
});

export default router;
