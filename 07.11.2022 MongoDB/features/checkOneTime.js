import { Error, Ok } from "../features/features.js";

var lastTime = undefined;

export const checkAttempt = (req, res, next) => {
  const tooday = new Date().getDay();

  if (lastTime === undefined || lastTime != tooday) {
    lastTime = tooday;
    next();
  } else {
    res.json(new Error("You have attempt one time. Try next day"));
  }
};
