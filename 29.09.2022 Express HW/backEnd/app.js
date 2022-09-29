import express from "express";
import router from "./routers.js";
import path from "path";

const PORT = 3000;
const app = express();

app.use(express.static(path.resolve("../frontEnd")));
app.use(router);

app.listen(3000, () => {
    console.log(`http://localhost:${PORT}`);
});