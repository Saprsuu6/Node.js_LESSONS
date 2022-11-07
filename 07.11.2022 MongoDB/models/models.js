import mongoose from "mongoose";

const newsChema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  text: { type: String },
});

const bitconInfoChems = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  rate_float: { type: String, required: true },
  date: { type: String, required: true },
});

export const News = mongoose.model("News", newsChema);
export const BitcoinInfo = mongoose.model("BitcoinInfo", bitconInfoChems);
