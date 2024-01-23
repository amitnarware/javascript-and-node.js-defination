// A set of functions you want to include in your application.
 /*module defination = 
In programming languages, including Node.js, a module is a 
self-contained and reusable block of code that provides specific 
functionality or services. Modules are used to organize code,
 promote code reusability, and enable better code maintainability.
  They allow developers to break down large programs into smaller,
   manageable pieces, each responsible for a specific task.
/* 1..To include a module, use the require() function with the name of the module:

var http = require('http');

2.. Now your application has access to the HTTP module, and is able to create a server:

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);  

3..   */
function func(x){
  console.log(typeof x, arguments.length)
}
func();
func(7);
func("1", "2", "3");