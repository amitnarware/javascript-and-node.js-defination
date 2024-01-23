/* 1. QUES
How assert works in Node.js?

In Node.js, assert is used to write tests. It only provides feedback only when any
 of the running test cases fails. This module gives you a set of assertion tests which
  are then used for testing invariants. It is basically used internally by Node.js but 
  using require(‘assert’) code, it can be used in other applications as well.

  var assert = require('assert');
function mul(a, b) {
return a * b;
}
var result = mul(1,2);
assert( result === 2, 'one multiplied by two is two');  */


/*  2.QUES
Describe the exit codes of Node.js.
In Node.js, exit codes are a set of specific codes which are used for finishing a specific process. These processes can include the global object as well. Below are some of the exit codes used in Node.js:

Uncaught fatal exception
Unused
Fatal Error
Internal Exception handler Run-time failure
Internal JavaScript Evaluation Failure */
