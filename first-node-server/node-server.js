// const http = require("http");
// // const requestListener=(req,res)=>{ // using normal function
// //     console.log(req)
// // }

// // http.createServer(requestListener) // normal function passing here as argumant
// const myName = "Talha Nawaz"
// const prof = "software engineer"
// const server = http.createServer((req, res) => {
//   // using arrow function or anonymous function here both works as same
//   // console.log(req);
//   // console.log(req.url,req.method,req.headers)
//   if(req.url==="/"){
//     res.setHeader("content-Type" ,"text/html")
//     res.write("<html>")
//     res.write("<head> <title> header page </title></head>")
//     res.write(`<body><h1>This is home page</h1></body>`)
//     res.write("</html>")
//     return res.end()

//   }else if (req.url==='/products'){
//     res.setHeader("content-Type" ,"text/html")
//     res.write("<html>")
//     res.write("<head> <title> products page </title></head>")
//     res.write(`<body><h1> This is products page</h1></body>`)
//     res.write("</html>")
//     return res.end()
//   }else{
//     res.setHeader("content-Type" ,"text/html")
//     res.write("<html>")
//     res.write("<head> <title> user page </title></head>")
//     res.write(`<body><h1> like share and subscribe  , my name is ${myName} ${prof} </h1></body>`)
//     res.write("</html>")
//     res.end()
//   }

//   // process.exit() // stops the server
// });
// // server.listen(3000)
// // another way
// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`server running at https://localhost:${PORT}`);
// });

////////////////////////////////////////////////////////////////////////////
const http = require("http");

const myName = "Talha Nawaz";
const prof = "software engineer";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Header Page</title></head>");
    res.write(`<body><h1>This is the home page</h1></body>`);
    res.write(`<body><h1>enter your details</h1></body>`);
    res.write("<form>");
    res.write('<input type="text" name="username" placeholder="enter user name">');

    res.write("</form>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Header Page</title></head>");
    res.write(`<body><h1>This is the products page</h1></body>`);
    res.write("</html>");
    return res.end();
  } else {
    res.setHeader("Content-Type", "text/html");         
    res.write("<html>");
    res.write("<head><title>Header Page</title></head>");
    res.write(
      `<body><h1>Like, share, and subscribe. My name is ${myName}, ${prof}.</h1></body>`
    );
    res.write("</html>");
    res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
