const code = require("./code.js");
const assert = require("assert");

function outputEqual (a,b) { //function that returns true if a and b are equal
  if (a == b)
    return true;
  else
    return false;
}

let array = [];
let key = 0;


//Test 1    If the key is not in the array it should return 0
array = [3,5,7,9,5,21,34,6,8,0,3,1,4,78,0,4,2,1,4,7];
key = 100;

let a = code.asyncCounter(array,key);
let b = code.syncCounter(array,key);

assert(outputEqual(a,b)); 


//Test 2    If the key is in the array 1 time
array = [3,5,7,9,5,21,34,6,8,0,3,1,4,78,0,4,2,1,4,7];
key = 34;

a = code.asyncCounter(array,key);
b = code.syncCounter(array,key);

assert(outputEqual(a,b)); 


//Test 3    If the key is in the array x times
array = [3,5,7,9,5,21,34,6,8,0,3,1,4,78,0,4,2,1,4,7];
key = 4;

a = code.asyncCounter(array,key);
b = code.syncCounter(array,key);

assert(outputEqual(a,b)); 


//Test 4    If the key is in the array x times
array = [3,5,7,9,5,21,34,6,8,0,3,1,4,78,0,4,2,1,4,7,78,78,78,78,78,78,78,78];
key = 78;

a = code.asyncCounter(array,key);
b = code.syncCounter(array,key);

assert(outputEqual(a,b)); 
