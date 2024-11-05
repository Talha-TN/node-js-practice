
const http = require("http")
// const requestListener=(req,res)=>{ // using normal function
//     console.log(req)
// }

// http.createServer(requestListener) // normal function passing here as argumant

const server = http.createServer((req,res)=>{  // using arrow function or anonymous function here both works as same 
    console.log(req)
})
server.listen(3000)