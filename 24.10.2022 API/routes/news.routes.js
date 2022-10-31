import { Router } from "express";
import {
  delete_news_by_id_midleware,
  delete_news_midleware,
  get_all_midleware,
  get_current_midleware,
  post_news_midleware,
  update_news_midleware,
} from "../controllers/news_controller.js";

const router_news = Router();

router_news
  .route("/news")
  .get(get_all_midleware, (req, res) => {
    console.log(req.header.toString());
    if (req.news.length === 0) {
      res.json({ error: false, message: "No one news" });
    } else {
      res.json(req.news);
    }
  })
  .post(post_news_midleware, (req, res) => {
    res.json({ error: false, message: "Succesfull insert" });
  })
  .delete(delete_news_midleware, (req, res) => {
    res.json({ error: false, message: "Succesfull clearing" });
  });

router_news.route("/").get((req, res) => {
  res.end("ok");
});

router_news
  .route("/news/:id")
  .get(get_current_midleware, (req, res) => {
    if (req.news.length === 0) {
      res.json({ error: false, message: "No one news" });
    } else {
      res.json(req.news);
    }
  })
  .put(update_news_midleware, (req, res) => {
    if (req.news.length === 0) {
      res.json({ error: false, message: "No one such news" });
    } else {
      res.json({ error: false, message: "Succesfull update" });
    }
  })
  .delete(delete_news_by_id_midleware, (req, res) => {
    res.json({ error: false, message: "Succesfull clearing" });
  });

export default router_news;
