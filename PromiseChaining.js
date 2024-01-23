   // WHAT IS PROMISE CHAINING 

 /*  Promise Chaining: Promise Chaining is a simple concept by 
 which we may initialize another promise inside our .then()
  method and accordingly we may execute our results. 
  The function inside then captures the value returned by the 
  previous promise 

The syntax for using promise chaining is as follows. */



    let promise = new Promise((resolve, reject) => {
    resolve("Hello JavaScript");
    });
     
    promise
    .then( function (result1){
        console.log(result1);
        return new Promise((resolve,reject) =>{
            resolve("GFG is awesome");
        })
    })
    .then((result2) => {
        console.log(result2);
    });

    /* As illustrated above, while executing the declared
 promise we are returning another promise inside the .then() 
 and executing our results accordingly. Another then is used
  to capture the new promise. This is known as promise chaining.
   This solves the problem of callback hell. */