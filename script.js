console.log("Hello World!");

// Variables
// let name;
// console.log(name); // opundefined

let name ='John';
console.log(name); // opJohn


//Constants
let interestRate = 0.3;
interestRate = 1; //the value of interestRate changes from 0.3 to 1
console.log(interestRate); // op=1

//ts will create bugs in our application
// soo we will use const

const interestRateConst = 0.3;
// interestRateConst = 1; // if we use this ln then we will get error because we cannot change the value of constant
console.log(interestRateConst); // op=0.3