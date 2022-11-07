import fetch from "node-fetch";

export const codes = ["USD", "GBP", "EUR"];

export const getBitcoinInfo = async (req, res, next) => {
  await fetch("https://api.coindesk.com/v1/bpi/currentprice.json", {
    method: "GET",
  })
    .then(async (res) => {
      return await res.json();
    })
    .then((res) => {
      req.bitcoinInfo = res;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
};
