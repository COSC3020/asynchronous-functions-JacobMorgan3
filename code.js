function asyncCounter (array, key) {
    let count = 0
    
    
    
    return count;
}

function syncCounter (array, key) {
    let count = 0;
    for (let i = 0; i < array.length; i ++) {
        if (key == array[i])
            count++;
    }
    return count;
}


let array = [3,5,7,9,5,21,34,6,8,0,3,1,4,78,0,4,2,1,4,7];
let key = 4;

console.log(syncCounter(array, key));
