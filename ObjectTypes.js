// Defination

//In JavaScript, objects are composite data types used to store key-value
// pairs, where keys are strings (or Symbols) and values can be any data 
// type, including other objects, arrays, functions, etc

//   1.....Object literals 


/* The simplest way to create an object is by using object literals,
 denoted by curly braces {}. Properties and methods can be defined
  inside the braces.
  const person = {
  name: 'John',
  age: 30,
  sayHello: function() {
    console.log('Hello!');
  }
};

2......Constructor Function:


You can create objects using constructor functions, which are 
functions designed to be used with the new keyword. Constructor
functions initialize object properties using the this keyword.

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log('Hello!');
  };
}

const person = new Person('John', 30);

3....Object.create() method:


The Object.create() method creates a new object with the specified prototype object.


const personPrototype = {
  sayHello: function() {
    console.log('Hello!');
  }
};

const person = Object.create(personPrototype);
person.name = 'John';
person.age = 30;  */
