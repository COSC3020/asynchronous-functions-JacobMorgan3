const code = require("./code.js");
const assert = require("assert");


//Test 1    If the arrayu is empty it should return 0
let array = [];

let a = code.nmPTP(array,done);

assert(a); 


//Test 2    If there is one element the sum should be the one element
array = [3];

a = code.nmPTP(array,done);

assert(a); 


//Test 3    
array = [3,5,7,9,5,21,34,6,8,0,3,1,4,78,0,4,2,1,4,7];

a = code.nmPTP(array,key,done);

assert(a); 


//Test 4 
array = [3,5,7,9,5,21,34,6,8,0,3,1,4,78,0,4,2,1,4,7,78,78,78,78,78,78,78,78];

a = code.nmPTP(array,key,done);

assert(a); 
