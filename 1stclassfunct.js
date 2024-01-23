// a function can be passed as an argument to other functions, can
// be returned by another function and can be assigned as a value
// to a variable.
let x = function(){
    console.log("this is x")
}
function y(x){
    console.log("this is y function")
x()
return (function(){
    console.log("this is returned by HOC")
})
}
let k = y(x)
k();



// higher order function retrun a function as an argument 
/*  Higher-Order Function
This is either a function that receives another function as an
 argument or a function that returns a new function. This is only
  possible because of the first-class function. */

  // a function can be passed as an argument into other function and return
  // by  another function and an assign a value to a variable
  