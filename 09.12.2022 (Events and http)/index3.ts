import internal, { EventEmitter } from "stream";

class Timer extends EventEmitter {
  total: number;
  ticks: number;
  interval: NodeJS.Timer;

  constructor(totalParam: number) {
    super();
    this.total = totalParam;
    this.ticks = 0;
  }

  start() {
    this.interval = setInterval(() => {
      this.tick();
    }, 1000);
    this.emit("start");
  }

  tick() {
    this.ticks += 1;
    if (this.ticks <= this.total) {
      this.emit("tick", this.ticks);
    } else {
      this.end();
    }
  }

  end() {
    clearInterval(this.interval);
    this.emit("end");
  }
}

const timer = new Timer(10);

timer.once("start", () => {
  console.log("Start...");
});

timer.on("tick", (tick) => {
  console.log("Tick: " + tick);
});

timer.once("end", () => {
  console.log("End...");
});

timer.start();
