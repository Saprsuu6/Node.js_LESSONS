import { Router } from "express";
import {
  deleteCategorieByIdMidleware,
  deleteCategoriesMidleware,
  getAllCategoriesMiddleware,
  getCurrentCutegoriMidleware,
  postCategorieMidleware,
  updateCategorieMidleware,
} from "../controllers/categories.controller.js";

const router_cateories = Router();

router_cateories
  .route("/categories")
  .get(getAllCategoriesMiddleware, (req, res) => {
    console.log(req.header.toString());
    if (req.categories.length === 0) {
      res.json({ error: false, message: "No one news" });
    } else {
      res.json(req.categories);
    }
  })
  .post(postCategorieMidleware, (req, res) => {
    res.json({ error: false, message: "Succesfull insert" });
  })
  .delete(deleteCategoriesMidleware, (req, res) => {
    res.json({ error: false, message: "Succesfull clearing" });
  });

router_cateories
  .route("/categories/:id")
  .get(getCurrentCutegoriMidleware, (req, res) => {
    if (req.categorie.length === 0) {
      res.json({ error: false, message: "No one news" });
    } else {
      res.json(req.categorie);
    }
  })
  .put(updateCategorieMidleware, (req, res) => {
    if (req.news.length === 0) {
      res.json({ error: false, message: "No one such categories" });
    } else {
      res.json({ error: false, message: "Succesfull update" });
    }
  })
  .delete(deleteCategorieByIdMidleware, (req, res) => {
    res.json({ error: false, message: "Succesfull clearing" });
  });

export default router_cateories;
