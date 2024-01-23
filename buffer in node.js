//   WHAT IS BUFFER IN NODE.JS

/*  Pure JavaScript is great with Unicode-encoded strings, but it
 does not handle binary data very well. It is not problematic when 
 we perform an operation on data at the browser level but at the
  time of dealing with TCP stream and performing a read-write 
  operation on the file system is required to deal with pure binary
   data. To satisfy this need Node.js use Buffer, So in this 
   article, we are going to know about buffer in Node.js.

Buffers in Node.js: The Buffer class in Node.js is used to perform
 operations on raw binary data. Generally, Buffer refers to the 
 particular memory location in memory. Buffer and array have some
  similarities, but the difference is array can be any type, and it
can be resizable. Buffers only deal with binary data, and it can 
not be resizable. Each integer in a buffer represents a byte.
console.log() function is used to print the Buffer instance. */

