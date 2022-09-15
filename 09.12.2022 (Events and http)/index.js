const EventEmitter = require("events");
const event = new EventEmitter();

var listener = (data) => {
  console.log(data);
};

event.on("open", listener);
event.addListener("close", listener);
event.once("open_once", listener);

event.emit("open", "hello");
event.emit("open_once", "once(1)");
event.emit("open_once", "once(2)");
event.removeListener("opne", listener);
event.emit("close", "bye");
