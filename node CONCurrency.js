/* Node js is an open-source virtual machine that uses javascript as
 its scripting language. Despite being single-threaded, it is one of
  the most popular web technologies. The reason why node js is 
  popular despite being single-threaded is the asynchronous nature
   that makes it possible to handle concurrency and perform 
   multiple I/O operations at the same time. Node js uses an 
   event loop to maintain concurrency and perform non-blocking
    I/O operations.

As soon as Node js starts, it initializes an event loop. The event 
loop works on a queue (which is called an event queue) and performs
 tasks in FIFO(First In First Out) order. It executes a task only
  when there is no ongoing task in the call stack. The call stack
   works in LIFO(Last In First Out) order. The event loop
    continuously checks the call stack to check if there is any
     task that needs to be run. Now whenever the event loop finds
      any function, it adds it to the stack and runs in order.  */ 