/*  QUES  WHAT IS BLOCKING A CODE ? 
In the context of programming, "blocking code" refers to code that
 causes the execution flow of a program to pause or block until a 
 certain operation completes. During this time, the program cannot
  proceed to execute other tasks, and it waits for the blocking 
  operation to finish before continuing with the next instructions.

Blocking code is commonly associated with synchronous operations,
 where each operation is executed one after the other, and the
program must wait for the current operation to finish before 
moving on to the next one. This can lead to performance issues,
especially in applications that need to handle multiple tasks
concurrently or perform time-consuming operations like network 
requests, file I/O, or database queries. */


//  * to geting out this problem developers use async program


/*Q2  --HOW NODE.JS PREVENT BLOCKING A CODE ?

Node.js is a cross-platform JavaScript runtime environment that
 helps to execute and implement server-side programs. Node is 
 assumed to prevent blocking code by using a single-threaded event 
 loop. In this article, we will discuss this event loop and how it 
 asynchronously implements functions by using callbacks.

 Node and Event Loop: Now we know what blocking and non-blocking
operations are, we can discuss how node prevents blocking code.
Node uses a single thread, which means one task can be executed
at a time. This is done by using a stack. While reading the code
from top to bottom, each instruction is pushed into a stack
and when its execution is completed, it pops out of the stack.
Now we may come across an instruction/function that will take 
a longer time to execute which can result in the delay in popping
 the stack and execution of further statements. 

 So what Node.js allows is the use of Event Loop. Each time when we 
 encounter such a situation, the process causing the delay is 
 offloaded from the stack and the execution of that process 
 continues parallel to further execution of the main code. Thus, 
 the callback for that function is pushed into a task queue and the 
 code continues to execute asynchronously. When the process 
 completes its execution, the callback function returns the desired
  output from that process and resumes normal execution. */