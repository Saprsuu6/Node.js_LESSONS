const os = require("node:os");

var GetFreeMem = () => {
  return os.freemem();
};

exports.GetFreeMem = GetFreeMem;

var GetHomeDir = () => {
  return os.homedir();
};

var GetHostName = () => {
  return os.hostname();
};

var GetLoadAvg = () => {
  return os.loadavg();
};

var GetEndIanness =()=>{
    return os.endianness();
}

console.log("Free memmory is " + GetFreeMem() + " bytes");
console.log("Home directory on this PC is " + GetHomeDir());
console.log("Name of this PC is " + GetHostName());
console.log(
  "Load avarage the: 1 minute - " +
    GetLoadAvg()[0] +
    ", 2 minute - " +
    GetLoadAvg()[1] +
    ", 15 minute - " +
    GetLoadAvg()[2]
);
console.log("The rage bytes of CPU is " + GetEndIanness());
