// Printing prime numbers up to 20
/*for (let i = 2; i <= 20; i++) {
    let isPrime = true; // Assume 'i' is prime unless proven otherwise
  
    // Check if 'i' is divisible by any number other than 1 and itself
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        // If 'i' is divisible by any 'j', then it is not prime
        isPrime = false;
        break;
      }
    }
  
    // If 'isPrime' is still true, then 'i' is a prime number
    if (isPrime) {
      console.log(i);
    }
  } */
let golu = 0;
let n = 48;
//let n = 10;
for (let i = 2; i <= (n/2); i++) {
  if (n % i == 0) {
    golu = 1
    break;
  }
}
if (golu == 1)
  console.log("not prime")
else
  console.log("prime")
console.log(golu)