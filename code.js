function asyncCounter(array,key) { //used an accumulator code from https://transcoding.org/javascript/sum-array/ as a base and then moified it
    let count = array.reduce((count, currentElement) => {
        if (currentElement == key) {
            count++;
            return count;   
        } else 
            return count;
    }, 0);
    
    return count;
}

function syncCounter(array, key) {
    let count = 0;
    for (let i = 0; i < array.length; i ++) {
        if (key == array[i])
            count++;
    }
    return count;
}


let array = [3,5,7,9,5,21,34,6,8,0,3,1,4,78,0,4,2,1,4,7];
let key = 3;

console.log(asyncCounter(array, key));




/////////////////////////////////////////////////////////////////////////////////code to work on still///////////////
function asyncCounter(array,key) {
    let totalCount = array.reduce(work);
    return totalCount;
}

function work(count, currentValue, index) {
    if (currentValue == key) 
        return count++;   
    else 
        return count;
}

function syncCounter(array, key) {
    let count = 0;
    for (let i = 0; i < array.length; i ++) {
        if (key == array[i])
            count++;
    }
    return count;
}


let array = [3,5,7,9,5,21,34,6,8,0,3,1,4,78,0,4,2,1,4,7];
let key = 34;

console.log(asyncCounter(array, key));
