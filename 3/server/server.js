const http = require("http");
const fs = require("fs");

// function rqListener(req, res) {}

// http.createServer(rqListener);

// // other options
// //is the same as
// http.createServer(function (req, res) {});

// // is the same as
// http.createServer((req, res) => {});

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>Home</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      //To be run in the future, does not pause the execution
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.writeHead(302, { Location: "/" });
        return res.end();
      });
    });
  }
});

server.listen(3000);
