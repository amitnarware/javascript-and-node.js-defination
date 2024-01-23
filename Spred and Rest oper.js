//  WHAT IS diff between spread and Rest operator

/*Rest Operator (...):

The rest operator is used to represent an indefinite number of function arguments 
or the remaining elements of an array. It allows you to capture multiple arguments
 or array elements into a single variable.

 function sum(...numbers) {
  let result = 0;
  for (const num of numbers) {
    result += num;
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
 
IN destructuring

const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(rest); // Output: [2, 3, 4, 5]


Spread Operator (...):

The spread operator is used to split an array or object into individual elements
 or properties. It is often used for creating new arrays or objects, combining 
 arrays, and spreading elements into function arguments.

 Combining Arrays:

 const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

Copying Arrays:
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];
console.log(copyArray); // Output: [1, 2, 3]

Spreading into Function Arguments:
function greet(firstName, lastName) {
  console.log(`Hello, ${firstName} ${lastName}!`);
}

const name = ['John', 'Doe'];
greet(...name); // Output: Hello, John Doe!  */