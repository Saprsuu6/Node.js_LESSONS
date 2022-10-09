import express from "express";
import router from "./routers.js";
import path from "path";
import bodyParser from "body-parser";

const PORT = 3600;
const app = express();
const __dirname = path.resolve()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, "views")));
app.use(router);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});