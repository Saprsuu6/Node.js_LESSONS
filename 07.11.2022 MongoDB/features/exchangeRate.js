import fetch from "node-fetch";

export const getExchangeRate = async (req, res, next) => {
  await fetch(
    "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json",
    {
      method: "GET",
    }
  )
    .then(async (res) => {
      return res.json();
    })
    .then((res) => {
      req.exchangeRate = res;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
};
