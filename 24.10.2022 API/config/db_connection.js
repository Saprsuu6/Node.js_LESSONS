import config from "./config.js";
import mysql from "mysql2";

export const connection_mysql = mysql.createConnection({
  host: config.DB.HOST,
  user: config.DB.USER,
  password: config.DB.PASSWORD,
  database: config.DB.DATABASE,
  port: config.DB.PORT,
});
