// create news
export const create_user = (data) => {
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
