// // the hello world program
// console.log('Hello World');



// //server
// const http = require('http');

// const server = http.createServer(function (req, res) {
//   res.write('<h1>Hello Node!!!!</h1>');
//   res.end();
// });

// server.listen(3000, (err) => {
//   err ? console.log(err) : console.log('The Server is Running on port 3000');
// });


const fs =require("fs")
// =========================

    // // //create a file
    //   fs.writeFile("welcome.txt","Hello node",err=>{
    //       if(err){console.log(err)}  else{
    //           console.log("created with success")
    //           // ------
    //           fs.readFile("Welcome.txt",(err,file)=>{
    //               if(err){
    //                   console.log(err)
    //               }else{
    //                console.log(file)
    //               }          })
            
    //       } 
            
            
    //   })





//          //  rename file

//   fs.rename('Welcome.txt',"hello.txt",err=>{
//      err?console.log(err):console.log("renamed succefuly")
//   })