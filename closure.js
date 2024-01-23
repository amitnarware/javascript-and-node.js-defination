/*   closure is a function who access a value from parent scope 
even after parent function  has closed.
function outerFunction() {
  const outerVariable = 'Hello';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Output: Hello
Even though outerFunction has finished executing, the innerFunction still retains 
access to the outerVariable due to the closure. When myClosure is
 called, it logs the value of outerVariable (i.e., "Hello") 
 because it still has access to its enclosing scope. */