/*  object 
is a collection of key value pairs where each key is unique

1...--  Object literals
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
This method involves defining an object using curly braces {} and 
directly specifying key-value pairs. It's a simple and concise way
 to create objects, especially when you have a limited number of
 properties.

2... --construter function
 function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}
const person = new Person('John', 30, 'New York');
Constructor functions allow you to define a blueprint for creating
 multiple objects of the same type. Inside the constructor function,
 you assign values to the object properties using the this keyword.

 3..object.create();
 const person = Object.create(null);
person.name = 'John';
person.age = 30;
person.city = 'New York';
The Object.create() method creates a new object with the specified
 prototype object. You can then add properties to the created 
 object using dot notation or square bracket notation. */
