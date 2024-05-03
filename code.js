const { StaticPool } = require("node-worker-threads-pool"); //nmPTP taken from course files

function nmPTP(arr, done) {
  const threads = Math.floor(Math.sqrt(arr.length)); //add so that i get the optimal number of threads for the input size and deal with any input size
  //console.log("threads: " + threads)
  const pool = new StaticPool({
    size: threads,
    task: function(a) {
        let sum = 0;
        for(let i = 0;  i < a.length; i++) {
            sum = sum + a[i];
        }
        return sum;
    },
  });

  const size = arr.length/threads;

  let res = 0, finished = 0;
  for(let i = 0; i < threads; i++) {
    (async () => {
      let r = await pool.exec(arr.slice(i*size, (i+1)*size));
      //console.log(arr.slice(i*size, (i+1)*size));
      //console.log("Result: " + r);
      res += r;
      finished++;
      if(finished == threads) {
        done(res, arr);
        pool.destroy();
      }
    })();
  }
}

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


//console.log(nmPTP([3,5,9,3,4,6,7,2,1,8,3,3,5,2,3,9,3,5,7,9,5,7,9,3,21,3,6,21,4,3,8,3], 3, done));


//add so i can test functions
module.exports = {nmPTP, done};
