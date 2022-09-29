import express from "express";
import path from "path";
import { writeUserToFile } from "./midlwares.js";

const router = express.Router();
const urlencodedParser = express.urlencoded({extended: false});

router.get("/", function(request, response){
    response.sendFile(path.resolve("../frontEnd", "home.html"));
});

router.get("/news", function(request, response){
    response.sendFile(path.resolve("../frontEnd", "news.html"));
});

router.get("/aboutUs", function(request, response){
    response.sendFile(path.resolve("../frontEnd", "aboutUs.html"));
});

router.get("/singIn", function(request, response){
    response.sendFile(path.resolve("../frontEnd", "singIn.html"));
});

router.get("/singUp", function(request, response){
    response.sendFile(path.resolve("../frontEnd", "singUp.html"));
});

router.post("/singInAcces", urlencodedParser, function(request, response){
    if(!request.body) return response.sendStatus(400);

    try {
        writeUserToFile(request.body.email, request.body.psw)
        response.sendFile(path.resolve("../frontEnd", "home.html"));
    } catch (error) {
        console.log(error)
    }
});

router.post("/singUpAcces", urlencodedParser, function(request, response){
    if(!request.body) return response.sendStatus(400);

    try {
        writeUserToFile(request.body.email, request.body.psw)
        response.sendFile(path.resolve("../frontEnd", "home.html"));
    } catch (error) {
        console.log(error)
    }
});

export default router;