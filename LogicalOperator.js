/*
There are four logical operators in JavaScript:

|| – OR
&& – AND
! – NOT
?? – Nullish Coalescing (see next question)

1...                   OR

The “OR” operator is represented by two vertical lines (||). In JavaScript, the
 “OR” operator evaluates the values from left to right and returns the first 
 truthy value. If none of the values are truthy, the “OR” operator will return 
 the last operand.

 let x = 'Hello' || false; // x is equal to 'Hello' (first truthy value)

let y = false || 'Yes' || 1; // y is equal to 'Yes' (first truthy value)

let z = false || undefined || 0; // since all are false, z is equal to 0 (the last value)

2.                          AND

The “AND” operator is represented by two ampersands (&&). In JavaScript, the
 “AND” operator evaluates the values from left to right and returns the first 
 falsy value. If all the operands are true, the “AND” operator will return the
  last operand.

let x = 'Hello' && false; // x is equal to 'false' (first falsy value)

let y = 0 && 'Yes' && true; // y is equal to 0 (first falsy value)

let z = true && 'Hello' && 10; // since all are truthy, z is equal to 10 (the last value)

3..                      NOT

The “NOT” operator is represented by an exclamation mark (!). the “NOT” operator 
accepts a single argument and returns the inverse of its boolean value.
 The argument is first converted into a boolean (true or false). The argument’s
  boolean value is then inverted and returned (true becomes false and vice versa).

  let x = !false; // x is equal to true

let y = !('Hello'); // y is equal to false ('Hello' is truthy) */