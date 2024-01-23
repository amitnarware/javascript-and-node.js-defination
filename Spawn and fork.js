//Spawn() method:

 
/*
The spawn process initiates a command in a new process. We can pass the command 
 as an argument to it. The result of the spawn function is a child process instance
that implements EventEmitterAPI.Handlers for events can be attached or registered
to the child instance created. Some of the events that can be attached or 
registered on that child instances are disconnect, error, close, and message,
etc. 

This is a very simple and general example of the use of spawn. We first required 
spawn by destructuring, then create a child process by passing arguments. 
Then register a stdout event on that child process.

This starts sending data back to a parent process from the child process as soon 
as the child process starts executing.


//  NodeJS fork()  

A fork in general is used to spawn child processes. In node it is used to create
 a new instance of v8 engine to run multiple workers to execute the code.



Although NodeJS is a single-threaded JavaScript runtime, it can create multiple
 subprocesses that run separately from each other, allowing you to divide and run 
 your application script from different NodeJS instances.

 The NodeJS fork() method is a built-in function of the child_process module that
  allows you to create a child process that’s connected to the main process 
  currently running your code.

*/

var express = require("express");
var app = express();

app.use("/",function(req,res) {
  res.send("hello")
})

app.listen(3000,()=>{
  console.log("server is running on 3000")
})