const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.PORT);

const rectangle = require("./rectangleJS_Saprsuu6/rectangleJS_Saprsuu6");
const rect = new rectangle(10, 10);
console.log(rect.GetHeight())