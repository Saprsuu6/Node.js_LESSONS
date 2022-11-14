import path from "path";
import os from "os";
import { fork } from "child_process";
import express from "express";

const __dirname = path.resolve();
const countCPUs = os.cpus().length;
const app = express();
const port = 3000;

app.get("/:num", (req, res) => {
  const { num } = req.params;

  const child_process = fork("worker.js");
  child_process.send(num);

  child_process.on("message", (message) => {
    console.log(`Child resul is ${message}`);
  });

  child_process.on("exit", (code) => {
    console.log(`Child ${child_process.pid} exit with code: ${code}`);
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
