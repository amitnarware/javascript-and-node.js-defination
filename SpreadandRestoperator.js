// 1...Spread Operator (...):

/* The spread operator is used to expand or spread the elements of 
an array or the properties of an object. It can be used in various
 contexts, like creating shallow copies, merging arrays, and passing
 arguments to functions.
 
a. Spread in Arrays:

  ex...
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];
console.log(copyArray); // Output: [1, 2, 3]

ex....
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

ex....
const originalObject = { name: 'John', age: 30 };
const copyObject = { ...originalObject };
console.log(copyObject); // Output: { name: 'John', age: 30 }
*/

