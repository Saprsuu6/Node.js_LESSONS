import { my_logger } from "../app.js";
import {
  create_news,
  delete_news,
  delete_news_by_id,
  find_all,
  find_one,
  update_one,
} from "../models/news.js";

export const get_all_midleware = (req, res, next) => {
  find_all()
    .then((data) => {
      req.news = data;
      next();
    })
    .catch((err) => {
      my_logger.error("err");
      return res.json({
        error: true,
        message: "Can not get list of news. Try later",
      });
    });
};

export const get_current_midleware = (req, res, next) => {
  find_one(req.params.id)
    .then((data) => {
      req.news = data;
      next();
    })
    .catch((err) => {
      my_logger.error("err");
      return res.json({
        error: true,
        message: "Can not get list of news. Try later",
      });
    });
};

export const post_news_midleware = (req, res, next) => {
  create_news(req.body)
    .then((data) => {
      req.news = data;
      next();
    })
    .catch((err) => {
      my_logger.error("err");
      return res.json({
        error: true,
        message: "Can not post news. Try later",
      });
    });
};

export const delete_news_midleware = (req, res, next) => {
  delete_news()
    .then((data) => {
      req.news = data;
      next();
    })
    .catch((err) => {
      my_logger.error("err");
      return res.json({
        error: true,
        message: "Can not clear news. Try later",
      });
    });
};

export const update_news_midleware = (req, res, next) => {
  update_one(req.params.id, req.body)
    .then((data) => {
      if (data.affectedRows === 0) {
        return res.json({
          error: true,
          message: "Can not update news. Try later",
        });
      }
      req.news = data;
      next();
    })
    .catch((err) => {
      my_logger.error("err");
      return res.json({
        error: true,
        message: "Can not update news. Try later",
      });
    });
};

export const delete_news_by_id_midleware = (req, res, next) => {
  delete_news_by_id(req.params.id)
    .then((data) => {
      if (data.affectedRows === 0) {
        return res.json({
          error: true,
          message: "Can not delete current news. Try later",
        });
      }
      req.news = data;
      next();
    })
    .catch((err) => {
      my_logger.error("err");
      return res.json({
        error: true,
        message: "Can not delete current news. Try later",
      });
    });
};
