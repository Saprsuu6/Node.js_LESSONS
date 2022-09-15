var urlRequire = require("url");

class MyUrl {
  constructor(url) {
    this.url = new urlRequire.URL(url);
  }

  getObj() {
    return this.url;
  }
}

class WorkWithUrl {
  constructor(url) {
    this.obj = url.getObj();
  }

  getProtocol() {
    return this.obj.protocol;
  }

  getHref() {
    return this.obj.href;
  }

  getHost() {
    return this.obj.host;
  }

  getAuth() {
    return this.obj.auth;
  }

  getHostname() {
    return this.obj.hostname;
  }

  getPort() {
    return this.obj.port;
  }

  getPathname() {
    return this.obj.pathname;
  }

  getQuerrystring() {
    return this.obj.search;
  }

  getQuerrystring() {
    return this.obj.search;
  }

  getPath() {
    return this.obj.path;
  }

  getQuerry() {
    return this.obj.query;
  }

  getHash() {
    return this.obj.hash;
  }
}

var myNewUrl = new MyUrl("https://www.npmjs.com/package/url");
var workWithUrl = new WorkWithUrl(myNewUrl);

console.log(workWithUrl.getProtocol()); // shows protocol transmitted data
console.log(workWithUrl.getHref()); // shows full href
console.log(workWithUrl.getHost()); // shows server host
console.log(workWithUrl.getAuth()); // shows authentication information portion of a URL
console.log(workWithUrl.getHostname()); // shows hostname
console.log(workWithUrl.getPort()); // shows server port
console.log(workWithUrl.getPathname()); // shows URL path name
console.log(workWithUrl.getQuerrystring()); // shows querry string (may not be)
console.log(workWithUrl.getPath()); // shows full path with querry string
console.log(workWithUrl.getQuerry()); // shows params
console.log(workWithUrl.getHash()); // shows 'fragment' portion of the URL including the pound-sign.