/* The setTimeout() method calls a function after a number of 
milliseconds.

The setTimeout() is executed only once.

If you need repeated executions, use setInterval() instead.

Use the clearTimeout() method to prevent the function from starting.

To clear a timeout, use the id returned from setTimeout():

myTimeout = setTimeout(function, milliseconds);
Then you can to stop the execution by calling clearTimeout():

clearTimeout(myTimeout); */

/*  setTimeout is a built-in function in JavaScript that allows you 
to schedule the execution of a function or the execution of a code
 snippet after a specified delay (in milliseconds). It is commonly
used for introducing delays in the execution of asynchronous code,
animation effects, or any operation that should happen after a
certain period. */

//setTimeout(callback, delay, ...args);

// callback: The function to be executed after the specified delay.
// This can be a reference to an existing function or an inline function.
//delay: The time (in milliseconds) to wait before executing the callback function.
//...args (optional): Additional arguments to be passed to the callback function.
/* function great(name){
    console.log(`hello  ${name}`)
}
setTimeout(great,2000, "john") */

function great(name){
    console.log(`hello ${name}`)
}
setTimeout(great,2000,"amit")

// setTimeout === allows us to run a function once after the interval of time.
//setInterval === allows us to run a function repeatedly, starting
//                 after the interval of time, then repeating 
//                   continuously at that interval.