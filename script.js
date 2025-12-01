console.log("Hello World!");



// Variables
// let name;
// console.log(name); // opundefined

// let name ='John';
// console.log(name); // opJohn



//Constants

// let interestRate = 0.3;
// interestRate = 1; //the value of interestRate changes from 0.3 to 1
// console.log(interestRate); // op=1

//ts will create bugs in our application
// soo we will use const

const interestRateConst = 0.3;
// interestRateConst = 1; // if we use this ln then we will get error because we cannot change the value of constant
console.log(interestRateConst); // op=0.3


// //Primitives
// let name ='Mosh'; // string literal
// let age = 30; // number literal
// let isApproved = false; // boolean literal <- Trues and False are resereved words in js
// let firstName = undefined; // undefined literal
// let lastName = null; // null literal



// //objects
// let name = 'Omkar';
// let age = 21;
//they are part of the representatin of a person object, so insted of having multiple variables for a person
//we can create a single object to represent a person
//and instead of refrencing these 2 variables we can refrence the person object

let person = {      //{} are called object literal
    name:'Omkar',
    age:21
}

//dot notation
person.name = 'Omkar Patkar'; //we can change the value of name property using dot notation

// console.log(person); //op= {name: 'Omkar Patkar', age: 21}
console.log(person.name); //op= Omkar Patkar

//bracket notation
let selection = 'name'; // we can use bracket notation when we dont know the property name at the time of writing the code
person[selection] = 'Patkar Omkar'; //we can change the value of name property using bracket notation
console.log(person.name); //op= Patkar Omkar



//Arrays
let selectedColors = ['red', 'blue']; // [] are called array literal, they indicate an empty array
//console.log(selectedColors); //op= ['red', 'blue']
selectedColors[2] = 'grey'; // we can add new elements to an array using index
selectedColors[3] = 5; // we can add different types of elements to an array
console.log(selectedColors); //op= ['red', 'blue', 'grey', 5]
console.log(selectedColors[0]); //op= red
console.log(selectedColors[1]); //op= blue
console.log(selectedColors.length); //op= 2



//Functions
//performing a task
function greet(name, lastName){ //variable name is a parameter in parenthesis, a fn can have multiple parameters separated by commas
    //body of the function, ts is where we add all the statements to define the logic of the function
    console.log('Hello ' + name + ' '+ lastName); //output: Hello Omkar
}

greet('Omkar', 'Patkar'); 
// we call the function to execute the code inside the function body
//here Omkar is an argument to the greet function, name is the parameter of thr greet function
//argument is the actual value that we pass to the function when we call it
greet('Nikhil', 'Sutar');

//calculating a value
function square(number){ // number is a parameter
    return number * number; // return keyword is used to return a value from a function
}

let number = square(2); // 2 is an argument
console.log(number); //op= 4s

console.log(square(3)); //op= 9 directly calling the function inside console.log without storing the return value in a variable
console.log(square(4)); //op= 16