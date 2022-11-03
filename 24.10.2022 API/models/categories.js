import { my_logger } from "../app.js";
import { connection_mysql } from "../config/db_connection.js";

// get all categories
export const getAll = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM categories";
    connection_mysql.query(sql, (err, rows) => {
      if (err) {
        my_logger.log("Successfull finding all categories");
        reject(err);
      } else {
        my_logger.error("Unsuccessfull finding all categories");
        resolve(rows);
      }
    });
  });
};

// find one categori
export const findOne = (id) => {
  return new Promise((resolve, reject) => {
    connection_mysql.query(
      "SELECT * FROM categories WHERE id=?",
      id,
      (err, rows) => {
        if (err) {
          my_logger.log("Successfull finding categori");
          reject(err);
        } else {
          my_logger.error("Unsuccessfull finding categori");
          resolve(rows);
        }
      }
    );
  });
};

// create categorie
export const createCategorie = (data) => {
  return new Promise((resolve, reject) => {
    connection_mysql.query(
      "INSERT INTO categories SET ?",
      data,
      (err, rows) => {
        if (err) {
          my_logger.log("Successfull creating categorie");
          reject(err);
        } else {
          my_logger.error("Unsuccessfull creating categorie");
          resolve(rows);
        }
      }
    );
  });
};

// delete all categories
export const deleteCategories = () => {
  return new Promise((resolve, reject) => {
    connection_mysql.query("TRUNCATE TABLE categories", (err, rows) => {
      if (err) {
        my_logger.log("Successfull deleting all categories");
        reject(err);
      } else {
        my_logger.error("Unsuccessfull deleting all categories");
        resolve(rows);
      }
    });
  });
};

// delete categorie by id
export const deleteCategorieById = (id) => {
  return new Promise((resolve, reject) => {
    connection_mysql.query(
      "DELETE FROM categories WHERE id=?",
      id,
      (err, rows) => {
        if (err) {
          my_logger.log("Successfull deleting categorie");
          reject(err);
        } else {
          my_logger.error("Unsuccessfull deleting categorie");
          resolve(rows);
        }
      }
    );
  });
};

// update one categorie
export const updateOne = (id, data) => {
  return new Promise((resolve, reject) => {
    connection_mysql.query(
      "UPDATE categories SET ? WHERE id=?",
      [data, id],
      (err, rows) => {
        if (err) {
          my_logger.log("Successfull updating categorie");
          reject(err);
        } else {
          my_logger.error("Unsuccessfull updating categorie");
          resolve(rows);
        }
      }
    );
  });
};
