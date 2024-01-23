//write a programne to find a primary no of a given number using
// callback function ?

function isPrime(number, callback){
    if (number < 2 ){
        callback(false);
        return;
    }
    for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i === 0 ){
        callback(false);
        return
        }
    }
    callback(true);
}
function handleResult(isPrime){
if(isPrime){
    console.log("the number is prime")
}
else{
    console.log("the number is not prime")
}
}
const number = 72;
isPrime(number, handleResult);