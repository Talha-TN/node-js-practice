const http = require("http");
// const requestListener=(req,res)=>{ // using normal function
//     console.log(req)
// }

// http.createServer(requestListener) // normal function passing here as argumant

const server = http.createServer((req, res) => {
  // using arrow function or anonymous function here both works as same
  // console.log(req);
  console.log(req.url,req.method,req.headers)
  // process.exit() // stops the server
});
// server.listen(3000)
// another way
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server running at https://localhost:${PORT}`);
});
