// DIFF BETWEEN MAP AND FILTER

/* map and filter are both higher-order functions in JavaScript
 used to manipulate arrays. They serve different purposes and
  have distinct behaviors:

  MAP
  map Function:

Purpose: map is used for transforming each element of an array
 and creating a new array based on the results of applying a
  provided function to each element.

Return Value: map returns a new array of the same length as
 the original array, where each element is the result of 
 applying the provided function to the corresponding element 
 in the original array.

 const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
// doubledNumbers will be [2, 4, 6, 8, 10]

FILTER
filter Function:

Purpose: filter is used for selecting elements from an array
 that satisfy a given condition and creating a new array 
 containing only those elements.

Return Value: filter returns a new array containing elements
 from the original array that pass the condition specified by
  the provided function.
  const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
// evenNumbers will be [2, 4] */
