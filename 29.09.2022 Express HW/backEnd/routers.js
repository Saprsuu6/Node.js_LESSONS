import express from "express";
import news from "./resources/news.js";
import path from "path";
import { writeUserToFile } from "./midlwares.js";
import methodOverride from "method-override";

const router = express.Router();
const urlencodedParser = express.urlencoded({extended: false});

router.use(methodOverride('X-HTTP-Method')) //          Microsoft
router.use(methodOverride('X-HTTP-Method-Override')) // Google/GData
router.use(methodOverride('X-Method-Override')) //      IBM
//app.use(methodOverride('_method'))

router.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method
      delete req.body._method
      return method
    }
}))

router
    .route("/")
    .get((request, response) => {
        response.render("home.ejs", {title: "Home page", news: news})
})

router
    .route("/news")
    .get((request, response) => {
        response.render("news.ejs", {title: "News", news: news})
    })
    .post((request, response) => {
        news.push({
            title: request.body.id,
            title: request.body.title,
            text: request.body.text
        });
        response.end("ok");
    })

router
    .route("/news/:id")
    .get((request, response)=>{
        response.send(news[request.params.id - 1])
    })
    .delete((request, response) => {
        let obj = news.find((el) => el.id === parseInt(request.params.id))
        if (obj) {
            let i = news.indexOf(obj)
            news.splice(i, 1);
        }
        response.redirect("/news")
    })
    .put((request, response) => {
        let biggest;
        if (news.length !== 0) {
            biggest = news.reduce((prev, current) => (prev.id > current.id) ? prev : current)
        }
        news.push({
            id: biggest ? biggest.id : 1,
            title: req.body.title,
            text: req.body.text,
        });
        response.redirect("/news")
    })

router
    .route("/aboutUs")
    .get((request, response) => {
        response.format({
            html: response.render("aboutUs.ejs", {title: "About us"})
        })
});

router
    .route("/singIn")
    .get((request, response) => {
        response.format({
            html: response.render("singIn.ejs", {title: "Sing in"})
    })
    // .post(urlencodedParser, (request, response) => {
    //     if(!request.body) return response.sendStatus(400);
        
    //     try {
    //         writeUserToFile(request.body.email, request.body.psw)
    //         response.format({
    //             html: response.render("home.ejs", {title: "Home page"})
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // });
});

router
    .route("/singUp")
    .get((request, response) => {
        response.format({
            html: response.render("singUp.ejs", {title: "Sing up"})
        })
});

router
    .route("/singIn")
    .post(urlencodedParser, (request, response) => {
    if(!request.body) return response.sendStatus(400);

    try {
        writeUserToFile(request.body.email, request.body.psw)
        response.format({
            html: response.render("home.ejs", {title: "Home page"})
        })
    } catch (error) {
        console.log(error)
    }
});

router
    .route("/singUp")
    .post(urlencodedParser, (request, response) => {
    if(!request.body) return response.sendStatus(400);

    try {
        writeUserToFile(request.body.email, request.body.psw)
        response.format({
            html: response.render("home.ejs", {title: "Home page"})
        })
    } catch (error) {
        console.log(error)
    }
});

export default router;