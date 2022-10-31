import { Router } from "express";
import { post_new_user_middleware } from "../controllers/user_controller.js";

const router_user = Router();

router_user.route("/user").post(post_new_user_middleware, (req, res) => {});

export default router_user;
