// HOW NODE.JS HANDLE CHILD THREADS ?

/* Child Process in Node: The child_process module gives the node
 the ability to run the child process by accessing operating system 
 commands. */

 /* Node.js is designed to be single-threaded, which means it
  operates on a single main thread (often referred to as the event
 loop) to handle all incoming requests and perform I/O operations. 
 However, Node.js does provide the ability to work with child threads
through the "child_process" module, which allows developers to
create and manage additional threads for parallel processing. */