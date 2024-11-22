// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log(req);
// });
// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`the server has been started on port number http://localhost:${PORT}`);
// });
/////////////////////////
////// Express JS
// const http = require("http");
// const express = require("express");
// const app = express()
// app.use((req,res,next)=>{ // this way we can make middleware in express they are rub accoridng to sequence they defined . the next function call to the next middleware in the sequence when it complete its execution. without next it can not move to the next middleware
//     console.log("came in first middleware",req.url,req.method)
//     next()
// })
// app.use((req,res,next)=>{ 
//     console.log("came in second middleware",req.url,req.method)
//     next()
// })
// app.use((req,res,next)=>{ 
//     console.log("came in third middleware",req.url,req.method)
//     next()
// })
// app.use((req,res,next)=>{ 
//     console.log("came in 4th middleware",req.url,req.method)
//     res.send("<p>All middlewares are executed and this response is send by last midddleware</p>")
// })
// const server = http.createServer(app);
// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`the server has been started on port number http://localhost:${PORT}`);
// });
//////////////////////////////////////////
// modification to remove http becasue express js will do all  this work  for us 

const express = require("express");
const app = express()
app.use((req,res,next)=>{ // this way we can make middleware in express they are rub accoridng to sequence they defined . the next function call to the next middleware in the sequence when it complete its execution. without next it can not move to the next middleware
    console.log("came in first middleware",req.url,req.method)
    next()
})
app.use((req,res,next)=>{ 
    console.log("came in second middleware",req.url,req.method)
    next()
})
app.use((req,res,next)=>{ 
    console.log("came in third middleware",req.url,req.method)
    next()
})
app.use((req,res,next)=>{ 
    console.log("came in 4th middleware",req.url,req.method)
    res.send("<p>All middlewares are executed and this response is send by last midddleware</p>")
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`the server has been started on port number http://localhost:${PORT}`);
});

 