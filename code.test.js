const code = require("./code.js");
const assert = require("assert");


function done(res, arr) { //idea for a function that gets the result and then compares it with the sync result from Noah Mulvaney (I have not looked at his code, he verbally told me that he wrote a function that does this idea)
  let sum = 0;
  for (let i = 0; i < arr.length; i ++) {
      sum = sum + arr[i];
  }
  let equal = false;
  if (res === sum) {
    equal = true;
    return equal;
  }
  else 
    return false;
}



//Test 1    If the arrayu is empty it should return 0
let array = [];


assert(code.nmPTP(array,done), true); 


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
