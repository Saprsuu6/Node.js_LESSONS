import { my_logger } from "../app.js";
import { connection_mysql } from "../config/db_connection.js";

// create news
export const create_user = (data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    connection_mysql.query("INSERT INTO users SET ?", data, (err, rows) => {
      if (err) {
        my_logger.log("Successfull creating user");
        reject(err);
      } else {
        my_logger.error("Unsuccessfull creating user");
        resolve(rows);
      }
    });
  });
};
