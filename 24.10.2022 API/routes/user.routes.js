import { Router } from "express";
import { post_new_user_middleware } from "../controllers/user.controller.js";
import {
  isEmailValid,
  isNameValid,
  isPasswordsValid,
} from "../features/user.validation.js";

const router_user = Router();

router_user
  .route("/user")
  .post(
    isNameValid,
    isPasswordsValid,
    isEmailValid,
    post_new_user_middleware,
    (req, res) => {
      res.json({ error: false, message: "ok" });
    }
  );

export default router_user;
