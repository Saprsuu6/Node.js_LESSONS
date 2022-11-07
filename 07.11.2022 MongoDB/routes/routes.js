import { Router } from "express";
import { codes, getBitcoinInfo } from "../features/bitcoinInfo.js";
import { Error, Ok } from "../features/features.js";
import { BitcoinInfo, News } from "../models/models.js";

const router = Router();

router
  .route("/news")
  .post(async (req, res) => {
    const { title, text } = req.body;
    const news = new News({ title, text });

    try {
      await news.save();
      res.json(new Ok("News has been added"));
    } catch (err) {
      res.json(new Error("News has not been added"));
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

router.route("/bitcoinInfo").get(getBitcoinInfo, (req, res) => {
  const date = new Date(req.bitcoinInfo.time.updated).toLocaleString();

  new Promise(async (resolve, reject) => {
    const infos = [];

    codes.forEach(async (element) => {
      const { code } = req.bitcoinInfo.bpi[element];
      const { rate_float } = req.bitcoinInfo.bpi[element];
      const bitcoinInfo = new BitcoinInfo({ code, rate_float, date });

      try {
        await bitcoinInfo.save();
      } catch (err) {
        res.json(new Error("Bitcoin info has not been added"));
        return;
      }

      infos.push(bitcoinInfo);
    });
    await resolve(infos);
  }).then((data) => {
    res.json(data);
  });
});

export default router;
