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

  // Using internal function with recursion to generate fibonacci series in an array
  fibsRec: (num) => {
    if (num < 0) return undefined;
    let tmpArr = [];

    const fib = (x) => {
      if (x < 0) return undefined;
      return x < 2 ? Number(x) : Number(fib(x - 1) + fib(x - 2));
    };

    Array.from({ length: num }, (_, i) => i).forEach((ele) => {
      tmpArr.push(fib(ele));
    });

    return tmpArr;
  },

  // Calling a recursive function within this group
  fibsRecAlt01: (num) => {
    if (num < 0) return undefined;
    let tmpArr = [];
    // Create an array of number ranging from 0 to 'num-1'
    Array.from({ length: num }, (_, i) => i).forEach((ele) => {
      tmpArr.push(fibonacciGrp.fibonacciTerm(ele));
    });
    return tmpArr;
  },

  // Using Y-combinator
  fibsRecAlt02: (num) => {
    if (num < 0) return undefined;
    let tmpArr = [];

    // Y-combinator
    //   soln: https://gist.github.com/LukeNewNew/a1891b0f7b101dfa155132f76bb176b3
    const Y_combinator = (h) => ((f) => f(f))((f) => h((n) => f(f)(n)));
    const fibY = Y((k) => (n) => (n <= 1 ? n : k(n - 1) + k(n - 2)));
    Array.from({ length: num }, (_, i) => i).forEach((ele) => {
      tmpArr.push(fibY(ele));
    });

    return tmpArr;
  },

  // Using Z-combinator, w/o using an external 'const fib'
  fibsRecAlt03: (num) => {
    if (num < 0) return undefined;
    let tmpArr = [];

    Array.from({ length: num }, (_, i) => i).forEach((ele) => {
      // tmpArr.push(Z((k) => (n) => (n <= 1 ? n : k(n - 1) + k(n - 2)))(ele));
      tmpArr.push(
        ((g) => ((x) => g((v) => x(x)(v)))((x) => g((v) => x(x)(v))))(
          (k) => (n) => (n <= 1 ? n : k(n - 1) + k(n - 2)),
        )(ele),
      );
    });

    return tmpArr;
  },

  fibs: (num) => {
    if (num < 0) return undefined;
    if (num == 0 || num == "0") return 0;
    if (num == 1 || num == "1") return [0];
    let fibArray = [0, 1];
    for (let i = 2; i <= num; i++) {
      fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
    // fibArray.splice(0, 1); // removing the first term as fibonacci sequence starts with 1, 1, 2, 3, 5, 8...
    fibArray.pop();
    return fibArray;
  },
};

// export { fibonacciGrp };
module.exports = fibonacciGrp;
