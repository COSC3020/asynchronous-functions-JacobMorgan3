const { StaticPool } = require("node-worker-threads-pool"); //nmPTP taken from course files

function nmPTP(arr, key, done) {
  const threads = Math.sqrt(arr.length); //add so that i get the optimal number of threads for the input size
  const pool = new StaticPool({
    size: threads,
    task: function(a) {
        let m = 0;
        for(let i = 0;  i < a.length; i++) {
            if(a[i] == this.workerData) m++;
        }
        return m;
    },
    workerData: key
  });

  const size = arr.length/threads;

  let res = 0, finished = 0;
  for(let i = 0; i < threads; i++) {
    (async () => {
      let r = await pool.exec(arr.slice(i*size, (i+1)*size));
      //console.log("Result: " + r);
      res += r;
      finished++;
      if(finished == threads) {
        done(res);
        pool.destroy();
      }
    })();
  }
}

function saveCount (res) { //function to return the count once all threads are finished, instead of using console.log
  return res;
}



function syncCounter(array, key) {
    let count = 0;
    for (let i = 0; i < array.length; i ++) {
        if (key == array[i])
            count++;
    }
    return count;
}


//let array = [3,5,7,9,5,21,34,6,8,0,3,1,4,78,0,4,2,1,4,7];
//let key = 3;

//console.log(asyncCounter(array, key));


//add so i can test functions
module.exports = {nmPTP, saveCount, syncCounter};
