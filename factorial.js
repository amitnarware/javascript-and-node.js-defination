// 5 factorial 

function factorialRecursive(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorialRecursive(n - 1);
    }
  }
  
  let factorial = factorialRecursive(5);
  console.log(factorial);  
  