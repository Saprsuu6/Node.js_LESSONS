import { create_user } from "../models/user.js";
import bcrypt from "bcryptjs";
import { my_logger } from "../app.js";

export const post_new_user_middleware = async (req, res, next) => {
  const { name, email, password, repeat_password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hashSync(password, salt);

  const toAdd = {
    name,
    email,
    password: hash,
    id_role: 2,
    salt,
  };

  create_user(toAdd)
    .then((data) => {
      //req.createdUser = data;
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
