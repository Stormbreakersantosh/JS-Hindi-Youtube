// ****** Operations *****
let value = 3;
let negValue = -value;
// console.log(negValue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1="hello";
let str2=" santosh";
let str3=str1+str2;
console.log(str3);

console.log("1"+2); // prints 12 in output by converting 2 into string and then concatenating both the strings.
console.log(1+"2"); // prints 12 in output by converting 1 into string and then concatenating both the strings.
console.log("1"+2+2); // prints 122 in output by converting both 2 into string and then concatenating them all
console.log(1+2+"2"); // prints 32 in output by first adding both the numbers 1 & 2 and then converts their sum to string and then concatenates them all to print 32 in the output. 

console.log(3+4*5%3);
//prints 5 in the output
//(3+20%3)=(3+2)=5
//this expression will evaluate according to BDMMAS(modified version of BODMAS for programming) rule means first Bracket operation, then Division, then multiplication, then Modulus operation, then addition and then subtraction (in programming or in general maths also addition and subtraction holds same priority as doing any of the operation first do not make any difference in the output)<- this is wrong and is not always true

console.log((3+4)*5%3); //prints 2 in the output
console.log(3+4**2+5*4%3); 
// prints 21 in the ouput
//(3+16+20%3)=(3+16+2)=21
console.log((3+4)**2*5%3);
// prints 2 in the output
//(7**2*5%3)=(49*5%3)=(245%3)=2
console.log((3+4)**5*2%3);
// prints 2 in the ouput
//(7**5*2%3)=(16807*2%3)=2
//means the evaluation will be according to BEDMMAS<-this is wrong and not always true
//means 1st bracket or parentheses
//2nd exponentiation
//3rd division
//4th multiplication
//5th addition and subtraction
console.log((3+4)**5*4/2%3);//prints 2 in output//(7**5*4/2%3)=(16807*4/2%3)=(67228/2%3)=(33614%3)=2
console.log((3+4)**4/2*5%3);//prints 2.5 in output//(7**4/2*5%3)=(2401/2*5%3)=(1200.5*5%3)=6002.5%3=2.5
console.log((4+4)/2**3*5%3);//prints 2 in the output//(8/8*5%3)=(1*5%3)=(5%3)=2
console.log((3+4)/2**3*5%3/3);//prints 0.458333....in the output//(7/8*5%3/3)=(0.875*5%3/3)=(4.375%3/3)=(1.375/3)=0.458333.....
console.log((3+4)**5*4*2%3/3);//prints 0.666.....in the output//(7**5*4*2%3/3)=(16807*4*2%3/3)=(67228*2%3/3)=(134456%3/3)=2/3=0.666..

console.log(+true);//output->1
//because giving "+"before true converts it into its equivalent number that is 1
console.log(+"");//output->0
//because giving "+"before empty string converts the empty string to its equivalent number
// console.log(true+);//output-> error
//giving "+" after anything results into error.
//console.log(""+);//output->error

let num1, num2, num3
num1=num2=num3=2+2 //each variable will get the sum of 2 & 2 that is 4 as their value.
console.log(num1,num2,num3) //prints 3 times 4 in the output in the same line.i.e., output will be->4 4 4

let gameCounter = 100;
++gameCounter; // value of gameCounter first increments and becomes 101
console.log(gameCounter) //prints 101 in the output
gameCounter++; //here also value of gameCounter increments by 1
console.log(gameCounter)//prints 102 in the output

// the difference between prefix and postfix operators
let val1=200;
let val2=200;
console.log(val1)
console.log(++val1);//prints 201 in the output//prefix increment operator//first increments the value of val1, then prints it in the output console(means first increments then does the operation). 
console.log(val1)//prints 201 in the output
console.log(val2++);//prints 200 in the output//postfix increment operator//first prints the value of val2 after that increments its value //the value of val2 will be 201 now, you can check it by printing it once again below
console.log(val2);//prints 201 in the output.
let val3, val4 = 100; //declares the value of val3 as undefined & gives val4 the value 100
console.log(val3)//prints undefined in the output console or output terminal
console.log(++val3)//prints NaN (.i.e., not a number)in the output
console.log(val3++)//prints same NaN in the output
console.log(val3)//prints same NaN in the output


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion