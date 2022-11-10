import mongoose from "mongoose";
import validator from "validator";

const newsChema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    text: { type: String },
    authorEmail: {
      type: String,
      required: true,
      validate: {
        validator: (val) => validator.isEmail(val),
        message: (props) => `${props.value} is not an email`,
      },
    },
  },
  { versionKey: false }
);

const bitconInfoChems = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  rate_float: { type: String, required: true },
  date: { type: String, required: true },
});

const exchangeRate = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  txt: { type: String, required: true, unique: true },
  rate: { type: String, required: true },
  exchangedate: { type: String, required: true },
});

export const News = mongoose.model("News", newsChema);
export const BitcoinInfo = mongoose.model("BitcoinInfo", bitconInfoChems);
export const ExchangeRate = mongoose.model("ExchangeRates ", exchangeRate);
