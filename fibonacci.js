#!/usr/bin/env node
/* fibonacci.js */

const fibonacciGrp = {
  fibsRec: (num) => {
    if (num < 0) return "OOPS";
    return num < 2
      ? Number(num)
      : Number(fibonacciGrp.fibsRec(num - 1) + fibonacciGrp.fibsRec(num - 2));
  },

  // console.log("The 8th term in the fibonacci series is " + fibsRec(8));

};

// export { fibonacciGrp };
module.exports = fibonacciGrp;
