import { my_logger } from "../app.js";
import {
  createCategorie,
  deleteCategorieById,
  deleteCategories,
  findOne,
  getAll,
  updateOne,
} from "../models/categories.js";

export const getAllCategoriesMiddleware = (req, res, next) => {
  getAll()
    .then((data) => {
      req.categories = data;
      next();
    })
    .catch((err) => {
      my_logger.error("err");
      return res.json({
        error: true,
        message: "Can not get list of categories. Try later",
      });
    });
};

export const getCurrentCutegoriMidleware = (req, res, next) => {
  findOne(req.params.id)
    .then((data) => {
      req.categorie = data;
      next();
    })
    .catch((err) => {
      my_logger.error("err");
      return res.json({
        error: true,
        message: "Can not get list of categorie. Try later",
      });
    });
};

export const postCategorieMidleware = (req, res, next) => {
  createCategorie(req.body)
    .then((data) => {
      req.categorie = data;
      next();
    })
    .catch((err) => {
      my_logger.error("err");
      return res.json({
        error: true,
        message: "Can not post categorie. Try later",
      });
    });
};

export const deleteCategoriesMidleware = (req, res, next) => {
  deleteCategories()
    .then((data) => {
      req.categories = data;
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

export const deleteCategorieByIdMidleware = (req, res, next) => {
  deleteCategorieById(req.params.id)
    .then((data) => {
      if (data.affectedRows === 0) {
        return res.json({
          error: true,
          message: "Can not delete current categorie. Try later",
        });
      }
      req.categorie = data;
      next();
    })
    .catch((err) => {
      my_logger.error("err");
      return res.json({
        error: true,
        message: "Can not delete current categorie. Try later",
      });
    });
};

export const updateCategorieMidleware = (req, res, next) => {
  updateOne(req.params.id, req.body)
    .then((data) => {
      if (data.affectedRows === 0) {
        return res.json({
          error: true,
          message: "Can not update categorie. Try later",
        });
      }
      req.news = data;
      next();
    })
    .catch((err) => {
      my_logger.error("err");
      return res.json({
        error: true,
        message: "Can not update categorie. Try later",
      });
    });
};
