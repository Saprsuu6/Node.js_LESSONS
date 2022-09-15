const EventEmitter = require("events");
export const myEvent = new EventEmitter();

myEvent.on("request", () => {
  console.log("will be request");
});

myEvent.on("responce", () => {
  console.log("was responce");
});
