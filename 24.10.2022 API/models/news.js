import { my_logger } from "../app.js";
import { connection_mysql } from "../config/db_connection.js";

// find all news
export const find_all = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM list_news";
    connection_mysql.query(sql, (err, rows) => {
      if (err) {
        my_logger.log("Successfull finding all news");
        reject(err);
      } else {
        my_logger.error("Unsuccessfull finding all news");
        resolve(rows);
      }
    });
  });
};

// create news
export const create_news = (data) => {
  return new Promise((resolve, reject) => {
    connection_mysql.query("INSERT INTO list_news SET ?", data, (err, rows) => {
      if (err) {
        my_logger.log("Successfull creating news");
        reject(err);
      } else {
        my_logger.error("Unsuccessfull creating news");
        resolve(rows);
      }
    });
  });
};

// delete all news
export const delete_news = () => {
  return new Promise((resolve, reject) => {
    connection_mysql.query("TRUNCATE TABLE list_news", (err, rows) => {
      if (err) {
        my_logger.log("Successfull deleting all news");
        reject(err);
      } else {
        my_logger.error("Unsuccessfull deleting all news");
        resolve(rows);
      }
    });
  });
};

// find one news
export const find_one = (id) => {
  return new Promise((resolve, reject) => {
    connection_mysql.query(
      "SELECT * FROM list_news WHERE id=?",
      id,
      (err, rows) => {
        if (err) {
          my_logger.log("Successfull finding news");
          reject(err);
        } else {
          my_logger.error("Unsuccessfull finding news");
          resolve(rows);
        }
      }
    );
  });
};

// update one news
export const update_one = (id, data) => {
  return new Promise((resolve, reject) => {
    connection_mysql.query(
      "UPDATE list_news SET ? WHERE id=?",
      [data, id],
      (err, rows) => {
        if (err) {
          my_logger.log("Successfull updating news");
          reject(err);
        } else {
          my_logger.error("Unsuccessfull updating news");
          resolve(rows);
        }
      }
    );
  });
};
