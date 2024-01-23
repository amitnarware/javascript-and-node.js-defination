/*    1.....Global Context:

In the global scope (outside of any function or object), this refers
 to the global object, which is typically window in web browsers or 
 global in Node.js.
 --------console.log(this === window); // true (in a browser)


 2..   Function Context:

Inside a regular function (not an arrow function), this refers to 
the object that called the function. It can vary depending on how
 the function is called.
 -------  function sayHello() {
  console.log(this);
}

sayHello(); // 

 3.... Object Context:

Inside a method of an object, this refers to the object itself.

-----const person = {
  name: "John",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // this refers to the 'person' object

It's important to note that the behavior of this can be influenced
 by how functions are called or by using methods like bind, call, 
 or apply to explicitly set the value of this. Understanding the
  context in which this is used is crucial for writing correct 
  JavaScript code.  */

  var buf = Buffer.alloc(15);
  console.log(buf)

