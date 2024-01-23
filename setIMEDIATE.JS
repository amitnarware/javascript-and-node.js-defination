//setImmediate(fn)
/*
achieves the same effect, except that it doesn’t use the queue of functions.
Instead, it checks the queue of I/O event handlers. If all I/O events in the 
current snapshot are processed, it executes the callback. It queues them 
immediately after the last I/O handler, somewhat like process.nextTick.
This is faster than setTimeout(fn, 0). 
  
 ---setImmediate/clearImmediate – Any function passed as the setImmediate() argument is
a callback that's executed in the next iteration of the event loop.
-----process.nextTick – Both setImmediate and process.nextTick appear to be doing 
the same thing; however, you may prefer one over the other depending on your 
callback’s urgency. 
7. What are the advantages of using promises i
  
  
  
  */