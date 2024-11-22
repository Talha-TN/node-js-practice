// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.write(
//     `
// <html>
// <head>

// </head>
// <body>
//     <ul>
//         <li><a href="/home">Home</a></li>
//         <li><a href="/about">About</a></li>
//         <li><a href="/contact">contact</a></li>
//         <li><a href="/services">services</a></li>

//     </ul>
// </body>
// </html>
//         `
//   );
//   if(req.url.toLowerCase()==="/home"){

//     res.write(`<h1>This is home page</h1>`);
//     return res.end()
//   }
//   else if(req.url.toLowerCase()==="/About" && req.method=='POST'){
//     req.on("data",chunk=>{
//        console.log(chunk)
//     })

//     res.write(`<h1>This is home page</h1>`);
//     return res.end()
//   }
//   else if(req.url.toLowerCase()==="/contact"){

//     res.write(`<h1>This is home page</h1>`);
//     return res.end()
//   }
//   else if(req.url.toLowerCase()==="/services"){
//     res.write(`<h1>This is home page</h1>`);
//     return res.end()
//   }

//   res.end();
// });
// server.listen(3000, () => {
//   console.log(`the server has been started at http://localhost:3000`);
// });
//////////////////////////
