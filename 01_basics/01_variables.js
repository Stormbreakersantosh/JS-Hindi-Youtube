const accountId = 144553
let accountEmail = "Santosh@google.com"
var accountPassword ="12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2  // not allowed because variables declared under const keyword cannot be changed or assigned with a new variable

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var because of issue in 
block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])