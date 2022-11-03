import validator from "validator";
import { connection_mysql } from "../config/db_connection.js";

export const isNameValid = (req, res, next) => {
  if (validator.isEmpty(req.body.name.trim())) {
    return res.json(getError("Name is required"));
  } else {
    req.body.name = req.body.name.trim();
    next();
  }
};

export const isEmailValid = (req, res, next) => {
  if (validator.isEmpty(req.body.email.trim())) {
    return res.json(getError("Email is required"));
  } else if (!validator.isEmail(req.body.email)) {
    return res.json(getError("Incorrect email"));
  } else {
    checkUniqueEmail(req.body.email)
      .then((data) => {
        if (data[0]["COUNT(*)"] > 0) {
          return res.json(getError("Current email already in use"));
        } else {
          req.body.email = req.body.email.trim();
          next();
        }
      })
      .catch((err) => {
        return res.json(getError("Somthing wrong"));
      });
  }
};

export const isPasswordsValid = (req, res, next) => {
  if (validator.isEmpty(req.body.password.trim())) {
    return res.json(getError("Password is required"));
  } else if (validator.isEmpty(req.body.repeat_password.trim())) {
    return res.json(getError("Repeat password is required"));
  } else if (
    !validator.equals(req.body.password.trim(), req.body.repeat_password.trim())
  ) {
    return res.json(getError("Incorrect email"));
  } else {
    req.body.password = req.body.password.trim();
    next();
  }
};

const getError = (msg) => {
  return {
    error: true,
    message: msg,
  };
};

const checkUniqueEmail = (email) => {
  return new Promise((resolve, reject) => {
    connection_mysql.query(
      "SELECT COUNT(*) FROM users u WHERE u.`email`=?",
      email,
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      }
    );
  });
};
