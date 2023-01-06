const http = require("http");

// function rqListener(req, res) {}

// http.createServer(rqListener);

// // other options
// //is the same as
// http.createServer(function (req, res) {});

// // is the same as
// http.createServer((req, res) => {});

const server = http.createServer((req, res) => {
  console.log(req);
  // process.exit();
});

server.listen(3000);
