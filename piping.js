// QUES-- WHAT IS PIPING IN NODE.JS

//Piping in NodeJS is the process by which byte data from one 
//stream is sent to another stream.

// What are streams?

/*Streams in NodeJS are a sequence of bytes. When a program processes
 some data it needs to read all the data into memory and then process
 it and write out the data back into some location. However, this approach
 fails when there is a large amount of data to be processed. To overcome
this problem streaming algorithms are used for processing the data 
in which the data is not read all at once instead it ‘flows’ into
the program, is processed, and ‘flows’ out of the program. Here the 
data is processed in small chunks and the whole data is never held
in memory at once. The data stream can be compared with the example
of water flowing in a river where a large amount of water is transported
by flowing through the river over time. Streaming algorithms are more 
memory efficient and faster. You can read this article to get a detailed
 guide on streams. */

 // what is piping

 /* Piping in NodeJS is useful when we need to write some data coming
from a source stream to another stream. In such a case we can use 
the piping algorithms provided by NodeJS instead of writing our own
 reading and writing logic. We basically pipe the read st  ream and write
stream to one another. This can be compared with joining two water
 bodies using a pipe to transfer water. */

 /* Pipe function can be used to connect an input stream to an
  output stream or it can be included with a combination of streams
   to create a complex pipeline to execute a certain task. */