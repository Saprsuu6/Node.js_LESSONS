import { create_user } from "../models/user.js";
import bcrypt from "bcryptjs";

export const post_new_user_middleware = async (req, res, next) => {
  const { name, email, password, repeat_password } = req.body;
  if (password === repeat_password) {
    my_logger.error("err");
    return res.json({
      error: true,
      message: "Password missmatch",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hashSync(password, salt);

  req.body.salt = salt;
  req.body.password = password;

  create_user(req.body)
    .then((data) => {
      //req.news = data;
      next();
    })
    .catch((err) => {
      my_logger.error("err");
      return res.json({
        error: true,
        message: "Can't registrate user. Try later",
      });
    });
};
