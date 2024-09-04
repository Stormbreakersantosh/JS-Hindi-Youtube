"use strict"; // this will treat all JS code as newer version of JS

// alert(3+3) // we are using nodejs, not browser, so this alert statement will not run directly. There is a special syntax for doing it in nodejs.
console.log(3+3); console.log("Santosh") //This code will run without any error. But this is not a good practice as it makes the readability of the code look bad
console.log(3 + 3)  // This is the right way 
console.log("Santosh") // as it makes the readability of the code looks good
console.log(3 
    + 3) // similarly this code will also run perfectly but the readabilty of the code is lost
// Remember code can be written in any way, it will run as long as there is no error in the code. But writing code in the good readable format makes the code looks good and leaves a good impression of you as a coder
// code readability should be high
let name = "Santosh"
let age = 18
let isLoggedIn = false // or true
let state;

// Various Datatypes in JavaScript
// number => 2 to power 53 (memory address range, means within this range we can assign a number to a variable, the number should lie within this range not more than that)
// bigint => This datatype is used when the range of number we are using is very big(generally, is more than the range of number datatype) and cannot be assigned using a simple number datatype
// string => This datatype comes in play whenever we define something within double quotes("") or single quotes("")
// boolean => this datatype can have only two values true/false. Generally in any programming language, 0 denotes false and 1 denotes true.
// null => standalone value, it means the value of a variable is not undefined, it is null means it doesn't contain any standard value and we assigned the value to variable as null
// undefined => whenever a variable is declared but not defined, then javascript defines the variable as undefined and when we try to print the variable value in console or terminal, the output will be undefined. It means Javascript defined the variable value as undefined.
// symbol =>will be used more in react and other figma tools. It is used for just defining the uniqueness between different components.

// so all the above mentioned datatypes are called primitive datatypes

console.log(typeof "Santosh") //output -> string
console.log(typeof age) //output -> number
console.log(typeof undefined) //output -> undefined
console.log(typeof null) //output -> object