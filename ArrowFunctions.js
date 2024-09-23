// Q1: Write an arrow function expression called greet(). It should accept a single argument representing a person's name.

// function greet(name) {
//     return "Hi " + name + "!";
// }

// let greet = name => "Hi " + name + "!";

// console.log(greet("John"))
// console.log(greet("James"))

// Q2: Convert the function isEven() into an equivalent arrow function.
// traditional function
// function isEven(num) {
//     return num % 2 === 0;
//   }

// from traditional to anonymous function we assign the function to a variable
// let isEven = function (num){
//     return num % 2 === 0;
// }

//arrow function with one line and one parameter
//let isEven = num => num % 2 === 0;



// Q3 Convert the following JavaScript function declaration to arrow function syntax:

// function counterFunc(counter) {
//   if (counter > 100) {
//     counter = 0;
//   } else {
//     counter++;
//   }
  
//   return counter;
// }

// arrow function with one parameter but multilines so keeping the curly braces and explicit return
// let counterFunc = counter => {
//         if (counter > 100) {
//             counter = 0;
//           } else {
//             counter++;
//           }
          
//           return counter;
//         }

//

// Q4 Write an arrow function for the following JavaScript function:

// function nameAge(name, age) {
//     console.log("Hello " + name);
//     console.log("You are " + age + " years old");
//   }

// arrow function with 2 arguments so keeping the brackets but multiline so keeping the curly braces to display messages
// let nameAge = (name, age) => {
//     console.log("Hello " + name);
//     console.log("You are " + age + " years old");
// }

// nameAge("doriane",39);


// Q5 Write the arrow function for the following:

// function printOnly() {
//   console.log("printing");
// }

// arrow function with no argument so keeping the brackets and one statement
// let printOnly = () => console.log("printing");


// Q6 Write the arrow function for the following:

// function sum(num1, num2) {
//     return num1 + num2
// }

// simplify to the maximum as 2 arguments in brackets and expression with no curly braces nor return
// let sum = (num1, num2) => num1 + num2;
