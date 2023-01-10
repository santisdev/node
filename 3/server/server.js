const http = require("http");

const routes = require("./routes");
// function rqListener(req, res) {}

// http.createServer(rqListener);

// // other options
// //is the same as
// http.createServer(function (req, res) {});

// // is the same as
// http.createServer((req, res) => {});

const server = http.createServer(routes);

server.listen(3000);
