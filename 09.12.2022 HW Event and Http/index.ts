const http = require("http");
const url = require("url");
const PORT = 3000;

import { homepage, about, content, page404 } from "./routing";
import { myEvent } from './listeners';

http
  .createServer(function (request, responce) {
    let urlParts = url.parse(request.url);
    console.log(urlParts.pathname);

    myEvent.emit("request");

    switch (urlParts.pathname) {
      case "/":
        homepage(request, responce);
        break;
      case "/about":
        about(request, responce);
        break;
      case "/content":
        content(request, responce);
        break;
      default:
        page404(request, responce);
        break;
    }

    myEvent.emit("responce");
  })
  .listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
