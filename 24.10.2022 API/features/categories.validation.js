import validator from "validator";
import { connection_mysql } from "../config/db_connection.js";

export const isNameValid = (req, res, next) => {
  if (validator.isEmpty(req.body.name.trim())) {
    return res.json(getError("Categorie is required"));
  } else {
    checkUniqueCategory(req.body.name)
      .then((data) => {
        if (data[0]["COUNT(*)"] > 0) {
          return res.json(getError("Current category already in use"));
        } else {
          req.body.name = req.body.name.trim();
          next();
        }
      })
      .catch((err) => {
        return res.json(getError("Somthing wrong"));
      });
  }
};

const getError = (msg) => {
  return {
    error: true,
    message: msg,
  };
};

const checkUniqueCategory = (name) => {
  return new Promise((resolve, reject) => {
    connection_mysql.query(
      "SELECT COUNT(*) FROM categories u WHERE u.`name`=?",
      name,
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
