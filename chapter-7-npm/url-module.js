//******************************* */ making http request
const http = require("http");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-type", "text/plain");
  res.end("hello world from nodejs");
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`the server has start running on port http://localhost:${PORT}`);
});
