const fs = require("fs");

export function homepage(request, responce) {
  fs.readFile("./documents/homepage.html", (err, data) => {
    if (err) responce.write(err);
    responce.write(data);
    responce.end();
  });
}

export function about(request, responce) {
  fs.readFile("./documents/about.html", (err, data) => {
    if (err) responce.write(err);
    responce.write(data);
    responce.end();
  });
}

export function content(request, responce) {
  fs.readFile("./documents/content.html", (err, data) => {
    if (err) responce.write(err);
    responce.write(data);
    responce.end();
  });
}

export function page404(request, responce) {
  fs.readFile("./documents/404.html", (err, data) => {
    if (err) responce.write(err);
    responce.write(data);
    responce.end();
  });
}
