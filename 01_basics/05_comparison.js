console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

console.log("2">1);
console.log("02">1);

// the below comparisons whenever used in a actual code base can create confusions. That's why we avoid using this type of comparisons in actual codebase.
console.log(null>0);
console.log(null==0);
console.log(null>=0);
// to avoid this type of confusions typescripts is used widely in industries as it is a type of javascript only but with strict definitions
console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);

// strictly checking operators("===","!==", etc are called strict checking operators or strict operators in javascript)

console.log("2"==2);  // this will return true as it will only check if the  values are equal or not
console.log("2"===2); // this will return false as it will not only check the values but also the datatypes of the elements(or values) we are comparing. Here as the values are equal but the datatypes are not equal so it will return false. It will return true only if both the values and datatypes of the elements are equal. That's why it is called as strict equality operator.