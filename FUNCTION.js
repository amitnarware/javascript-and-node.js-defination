/*      //  DIFF BETWEEN FUNCT DECLERATIONS AND FUNCT EXPRESSION
function = x() {

}  and
function x() {}: This is known as a function declaration.
 When you use this syntax, you are declaring a function named x in the current
  scope. Function declarations are hoisted, which means they are available for 
  use throughout the scope in which they are defined, even before the actual 
  line of code where the function is declared. For example:
  x(); // This will work even if called before the function declaration
function x() {
  console.log("Function x is called");
}


 let x =  function(){

 }   
 let x = function() {}: This is an example of an anonymous function expression
  assigned to a variable x. In this case, you're creating an anonymous function 
  and assigning it to the variable x. Function expressions are not hoisted;
   they can only be called after the point in your code where the function is 
   assigned to the variable.
   x(); // This will cause an error if called before the assignment
let x = function() {
  console.log("Function x is called");
};

So, the main difference between the two is hoisting and the ability to reference
 the function before its declaration. With a function declaration, you can call
  the function before it's declared in the code, while with a function
   expression assigned to a variable, you cannot. */