import { Error, Ok } from "../features/features.js";

export var lastTime = undefined;

export const changeLastTime = (value) => {
  lastTime = value;
};

export const checkAttempt = (req, res, next) => {
  let tooday = new Date().getDay();

  if (lastTime === undefined || lastTime != tooday) {
    lastTime = tooday;
    next();
  } else {
    res.json(new Error("You have attempt one time. Try next day"));
  }
};
