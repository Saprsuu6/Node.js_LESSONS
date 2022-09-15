const EventEmitter = require("events");
const event = new EventEmitter();

var arr = [];
for (i = 0; i < 20; i++) {
  var a = Math.round(Math.random() * 100);
  arr.push(a);
}

var listener1 = () => {
  console.log('listener1');
};

var listener2 = () => {
  console.log('listener2');
};

console.log(arr);

event.on("click", listener1);
event.on("open", listener2);
event.once("open_once", function () {
  console.log("once");
});

for (i = 0; i < 20; i++) {
  if (arr[i] == 0) {
    event.emit("open_once");
  }
  else if (arr[i] % 2 == 0){
    event.emit("click");
  }
  else{
    event.emit("open");
  }
}
