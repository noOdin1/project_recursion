#!/usr/bin/env node
/* fibonacci.js */

const fibonacciGrp = {
  fibonacciTerm: (num) => {
    if (num < 0) return undefined;
    return num < 2
      ? Number(num)
      : Number(
          fibonacciGrp.fibonacciTerm(num - 1) +
            fibonacciGrp.fibonacciTerm(num - 2),
        );
  },

  // console.log("The 8th term in the fibonacci series is " + fibsRec(8));

  fibs: (num) => {
    if (num < 0) return "OOPS";
    if (num == 0 || num == "0") return 0;
    if (num == 2 || num == "2" || num == 1 || num == "1") return 1;
    let fibArray = [0, 1];
    for (let i = 2; i <= num; i++) {
      fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
    fibArray.splice(0, 1); // removing the first term as fibonacci sequence starts with 1, 1, 2, 3, 5, 8...
    return fibArray.pop();
  },
};

// export { fibonacciGrp };
module.exports = fibonacciGrp;
