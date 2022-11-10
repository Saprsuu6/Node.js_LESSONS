import { Router } from "express";
import { getBitcoinInfo } from "../features/bitcoinInfo.js";
import { checkAttempt, lastTime } from "../features/checkOneTime.js";
import { getExchangeRate } from "../features/exchangeRate.js";
import { Error, Ok } from "../features/features.js";
import { BitcoinInfo, ExchangeRate, News } from "../models/models.js";

const router = Router();

router
  .route("/news")
  .post(async (req, res) => {
    const { title, text, authorEmail } = req.body;
    const news = new News({ title, text, authorEmail });

    if (req.body.text && req.body.text.trim() === "") {
      res.json(new Error("News has not been updated: (You have to set text)"));
      return;
    }

    try {
      await news.save();
      res.json(new Ok("News has been added"));
    } catch (err) {
      res.json(new Error(err.message));
    }
  })
  .get(async (req, res) => {
    try {
      const news = await News.find();
      res.json(news);
    } catch (err) {
      res.json(new Error("News has not been geted"));
    }
  });

router
  .route("/news/:id")
  .put(async (req, res) => {
    console.log(req.body);

    if (req.body.text && req.body.text.trim() === "") {
      res.json(new Error("News has not been updated: (You have to set text)"));
      return;
    }

    try {
      const obj = await News.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true,
      });
      res.json(new Ok(`News '${obj.title}' has been updated`));
    } catch (err) {
      res.json(new Error("News has not been updated"));
    }
  })
  .delete(async (req, res) => {
    try {
      const obj = await News.findByIdAndDelete(req.params.id);
      res.json(new Ok(`News '${obj.title}' has been deleted`));
    } catch (err) {
      res.json(new Error("News has not been deleted"));
    }
  });

router.route("/bitcoinInfo").get(getBitcoinInfo, async (req, res) => {
  const date = new Date(req.bitcoinInfo.time.updated).toLocaleString();
  const codes = req.bitcoinInfo.bpi;
  const infos = [];

  for (const key of Object.keys(codes)) {
    const { code } = req.bitcoinInfo.bpi[key];
    const { rate_float } = req.bitcoinInfo.bpi[key];
    const bitcoinInfo = new BitcoinInfo({ code, rate_float, date });

    try {
      await bitcoinInfo.save();
    } catch (err) {
      res.json(new Error(err.message));
      return;
    }

    infos.push(bitcoinInfo);
  }

  res.json(infos);
});

router
  .route("/financeCourse/:userCode")
  .get(checkAttempt, getExchangeRate, async (req, res) => {
    const { userCode } = req.params;
    const rates = req.exchangeRate;
    let obj = undefined;

    for (const info of rates) {
      if (info.cc === userCode.toUpperCase()) {
        obj = info;
      }
    }

    if (obj === undefined) {
      //console.log(typeof lastTime);
      //lastTime = undefined; вопрос!!!
      res.json(new Error("Not supported code"));
    } else {
      for (const info of rates) {
        const code = info.cc;
        const txt = info.txt;
        const rate = info.rate;
        const exchangedate = info.exchangedate;

        const exchangeRate = new ExchangeRate({
          code,
          txt,
          rate,
          exchangedate,
        });

        try {
          await exchangeRate.save();
        } catch (err) {
          res.json(new Error(err.message));
          return;
        }
      }

      res.json(obj);
    }
  });

export default router;
