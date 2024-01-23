//CALLBACK
/*when we pass a function into another function as a argument is 
 known callback */

 let x = 5;
 let y = function(){
    console.log("hi")
 }
 function result(x,y){
    console.log(x)
    y();
 }
result(x,y)