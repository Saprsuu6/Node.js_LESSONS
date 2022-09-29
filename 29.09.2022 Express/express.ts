const router = require("./routers")
const timeFix = require("./middleware")
const express = require("express");
const path = require("path");

const PORT = 3000;

const app = express();

app.use(timeFix);
app.use(router);
app.use(express.static(path.resolve(__dirname, "public")))

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});