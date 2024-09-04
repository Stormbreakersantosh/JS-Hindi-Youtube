let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof score);
console.log(typeof valueInNumber);

score="33abc"
valueInNumber = Number(score);
console.log(typeof score);
console.log(typeof valueInNumber);
console.log(score);
console.log(valueInNumber);
score=null;
valueInNumber=Number(score)
console.log(typeof score);
console.log(typeof valueInNumber);
console.log(score);
console.log(valueInNumber);
score = true
valueInNumber = Number(score);
console.log(typeof score);
console.log(typeof valueInNumber);
console.log(score);
console.log(valueInNumber);
score = "Santosh"
valueInNumber = Number(score)
console.log(typeof score)
console.log(typeof valueInNumber)
console.log(score)
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// "Santosh" => NaN
// These above are all some basic conversions.

//let see some more conversions
let isLoggedIn= 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);// output -> true

isLoggedIn = 0;
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);// output -> false

isLoggedIn="";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);//output->false (because conversion of empty string into boolean always returns false)
isLoggedIn="Santosh";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
//output -> true (because conversion of non-empty string always returns true)

//1->true;0->false
//""->false
//"Santosh"->true

//note:- In python,boolean values starts with capital "T" and capital "F".i.e.,True and False represents the boolean values in python.
//But in JavaScript, boolean values starts with small "t" and small"f".i.e.,true and false represents the boolean values in JavaScript.

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);