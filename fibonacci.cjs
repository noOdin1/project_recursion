#!/usr/bin/env node
/* fibonacci.js */
const process = require("process");
// console.log(process.argv);

// source: https://github.com/alexpozdnyakof/y-combinator/blob/main/index.js
const Y = (g) => ((x) => x(x))((x) => g((y) => x(x)(y)));
const Z = (g) => ((x) => g((v) => x(x)(v)))((x) => g((v) => x(x)(v)));

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

    const fib = (x) => {
      return x < 2 ? Number(x) : Number(fib(x - 1) + fib(x - 2));
    };
    return Array.from({ length: num }, (_, i) => i).map((ele) => {
      return fib(ele);
    });
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
    // let tmpArr = [];

    // Array.from({ length: num }, (_, i) => i).forEach((ele) => {
    //   // tmpArr.push(Z((k) => (n) => (n <= 1 ? n : k(n - 1) + k(n - 2)))(ele));
    //   tmpArr.push(
    //     ((g) => ((x) => g((v) => x(x)(v)))((x) => g((v) => x(x)(v))))(
    //       (k) => (n) => (n <= 1 ? n : k(n - 1) + k(n - 2)),
    //     )(ele),
    //   );
    // });
    // return tmpArr;

    return Array.from({ length: num }, (_, i) => i).map((ele) => {
      return ((g) => ((x) => g((v) => x(x)(v)))((x) => g((v) => x(x)(v))))(
        (k) => (n) => (n <= 1 ? n : k(n - 1) + k(n - 2)),
      )(ele);
    });
  },

  // IIFE method
  fibsRecAlt04: (num) => {
    if (num < 0) return undefined;

    return Array.from({ length: num }, (_, i) => i).map((ele) => {
      return ((fn, n) => {
        return fn(fn, n);
      })((self, n) => {
        return n <= 1 ? n : self(self, n - 1) + self(self, n - 2);
      }, ele);
    });
  },

  fibs: (num) => {
    if (num < 0) return undefined;
    if (num == 0 || num == "0") return 0;
    if (num == 1 || num == "1") return [0];

    // Either of this code blocks will work
    // let fibArray = [0, 1];
    // for (let i = 2; i <= num - 1; i++) {
    //   fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    // }

    let fibArray = [];
    for (let i = 0; i <= num - 1; i++) {
      i <= 1
        ? fibArray.push(i)
        : fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
    // fibArray.splice(0, 1); // removing the first term if fibonacci sequence starts with 1, 1, 2, 3, 5, 8...
    return fibArray;
  },

  /* Fibonacci using Iterative method variation 1 */
  fibsIterative01: (num) => {
    if (num < 0) return undefined;
    if (num == 0 || num == "0") return 0;
    if (num == 1 || num == "1") return [0];

    /* Memory storage for the Array.map anonymous function */
    let minusOne = 1;
    let minusTwo = 0;
    return Array.from({ length: num }, (_, i) => {
      if (i <= 1) {
        minusTwo = minusOne;
        minusOne = i;
        return i;
      }
      let tmpVal = minusOne + minusTwo;
      minusTwo = minusOne;
      minusOne = tmpVal;
      return tmpVal;
    });
  },

  /* Fibonacci using Iterative method variation 2 */
  fibsIterative02: (num) => {
    if (num < 0) return undefined;
    if (num == 0 || num == "0") return 0;
    if (num == 1 || num == "1") return [0];

    let fibArray = []; /* Memory for the Array.map function call */
    return Array.from({ length: num }, (_, i) => {
      if (i <= 1) {
        fibArray.push(i);
        return i;
      }
      fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
      return fibArray[fibArray.length - 1];
    });
  },

  fibsIterative03: (num) => {
    if (num < 0) return undefined;
    if (num == 0 || num == "0") return 0;
    if (num == 1 || num == "1") return [0];

    /* Memory storage for the Array.map anonymous function */
    let minusOne = 1;
    let minusTwo = 0;
    return Array.from({ length: num }, (_, i) => {
      if (i <= 1) {
        // Array destructuring notation
        [minusOne, minusTwo] = [i, minusOne];
        return i;
      }
      // Use Javascript's modern Array destructuring notation
      [minusOne, minusTwo] = [minusOne + minusTwo, minusOne];
      return minusOne;
    });
  },
};

// This file "fibonacci.cjs" and the lines below are for testing 'node' cli
// commands. The way to have this file executed in cli:
//   node fibonacci.cjs
// To run the "node" with 'watch':
//   node --watch fibonacci.cjs
// To execute the functions within this file:
//   node -e "console.log(require('./fibonacci.cjs').fibonacciGrp.fibsIterative03(32))"
// The requirement for this is to have the following export directive:
//   module.exports = { fibonacciGrp };

// console.dir(process.argv);
// console.log("Argument length: " + process.argv.length);
(() => {
  // Testing 'process' module
  // Now you can get the answer from anyone of the functions above,
  //   node fibonacci.cjs fibsIterative03 15
  const f2Exe = process.argv[2];
  const arg4Exe = process.argv.slice(3);

  console.log("Arguments received: ");
  console.dir(process.argv);

  const performance01 = () => {
    const startTime = performance.now(); /* Mark start of time */
    console.log(fibonacciGrp[f2Exe](...arg4Exe));
    const endTime = performance.now(); /* Mark end of time  */
    console.log(
      `Execution time (using 'perfomance.now())': ${endTime - startTime} ms`,
    );
  };

  const performance02 = () => {
    const startTimeNode = process.hrtime.bigint(); /* Mark start of time */
    console.log(fibonacciGrp[f2Exe](...arg4Exe));
    endTimeNode = process.hrtime.bigint(); /* Mark end of time  */
    console.log(
      `Execution time (using 'process.hrtime.bigint())': ${Number(endTimeNode - startTimeNode) / 1_000_000} ms`,
    );
  };

  if (process.argv.length > 1) {
    if (fibonacciGrp[f2Exe]()) {
      performance02();
      performance01();
    } else {
      console.log("Function not found");
    }
  }
})();

// export { fibonacciGrp };
module.exports = { fibonacciGrp };
