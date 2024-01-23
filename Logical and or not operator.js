/*
1. Logical AND (&&):
The logical AND operator (&&) returns true if both operands are true,
 and false otherwise.

 let a = true;
let b = false;

console.log(a && b); // Output: false
console.log(a && true); // Output: true
console.log(false && b); // Output: false

2. Logical OR (||):
The logical OR operator (||) returns true if at least one of the operands
 is true, and false if both are false

 let a = true;
let b = false;

console.log(a || b); // Output: true
console.log(false || true); // Output: true
console.log(false || b); // Output: false

3.  Logical NOT (!):
The logical NOT operator (!) is a unary operator that returns true if 
the operand is false, and false if the operand is true.

let a = true;
let b = false;

console.log(!a); // Output: false
console.log(!b); // Output: true
console.log(!true); // Output: false

4. Combining Logical Operators:
You can also combine these operators to create more complex conditions:

let x = true;
let y = false;
let z = true;

console.log(x && y); // Output: false
console.log(x || z); // Output: true
console.log(!(x && z)); // Output: false

5. The Nullish Coalescing Operator (??)
The ?? operator returns the first argument if it is not nullish (null or undefined).

Otherwise it returns the second argument.

*/
