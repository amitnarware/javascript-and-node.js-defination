// If Node.js is single threaded then how to handles concurrency ?

/* 
--Node js uses an event loop to maintain concurrency and perform
   non-blocking I/O operations.
  --In the context of Node.js, concurrency refers to the ability of
   the platform to handle multiple tasks simultaneously or concurrently.
 Node.js is designed to be single-threaded, which means it runs in 
 a single process and executes JavaScript code in a non-blocking
  manner. However, Node.js achieves concurrency through its 
  event-driven, non-blocking I/O model. 

2..Node.js leverages an event loop to handle multiple I/O operations
 without blocking the execution of the program. When an I/O operation,
  such as reading from a file, querying a database, or making an
   HTTP request, is initiated in Node.js, it doesn't wait for the 
   operation to complete before moving on to the next line of code. Instead,
 it registers a callback function and continues executing other tasks 
 in the meantime.

3.  Once the I/O operation is completed, the registered callback
 function is added to the event loop's queue. The event loop
  continuously checks the queue for pending callbacks and executes 
  them one by one, following a first-in-first-out (FIFO) order.


*/