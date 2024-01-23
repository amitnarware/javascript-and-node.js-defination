//  What is Callback Hell?

/* Callback hell in Node.js is the situation in which we have 
complex nested callbacks. In this, each callback takes arguments 
that have been obtained as a result of previous callbacks. In this
 manner, The code structure looks like a pyramid, which leads to 
 less readability and difficulty in maintenance. Also, if there is
  an error in one function, then all other functions get affected. */


  
 // How can we avoid the “Callback Hell”?

/*  Promise: With the help of Promises callback hell can be avoided.
 Promises in javascript are a way to handle asynchronous operations 
 in Node.js. It allows us to return a value from an asynchronous 
 function like a synchronous function. When we return something from
an asynchronous method it returns a promise which can be used to 
consume the final value when it is available in the future with the
 help of the then() method or awaits inside of async functions. The 
 syntax to create a promise is mentioned below. */

 //Async.js: Another way to avoid callback hell is, we have this
 // npm module called Async. Async is helpful in managing asynchronous JavaScript.
 // Some useful methods of Async are series, parallel, waterfall, etc. It works for browsers as well.