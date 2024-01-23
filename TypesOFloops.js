//     1----- FOR LOOPS
/*   for - loops through a block of code a number of times

Expression 1 is executed (one time) before the execution of the code block.

Expression 2 defines the condition for executing the code block.

Expression 3 is executed (every time) after the code block has been executed.

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

//                 2---------for/in - 
loops through the properties of an object
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}

3.....  The For Of Loop
The JavaScript for of statement loops through the values of an iterable object.

It lets you loop over iterable data structures such as Arrays, Strings, Maps,
 NodeLists, and more:
 const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}

 4....  LOOP WHILE 

 Loops can execute a block of code as long as a specified condition is true.
 while (i < 10) {
  text += "The number is " + i;
  i++;
}
*/

5.   