// import { fibonacciGrp } from "./fibonacci";
const fibonacciGrp = require("./fibonacci");

describe("fibonacci sequence using iterative method", () => {
  test("4th fibonacci number is 2", () => {
    expect(fibonacciGrp.fibs(4)).toEqual([0, 1, 1, 2]);
  });
  test("7th fibonacci number is 8", () => {
    expect(fibonacciGrp.fibs(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });
  test("10th fibonacci number is 34", () => {
    expect(fibonacciGrp.fibs(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
  test("15th fibonacci number is 377", () => {
    expect(fibonacciGrp.fibs(15)).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377,
    ]);
  });
  test("25th fibonacci number is 46368", () => {
    expect(fibonacciGrp.fibs(25)).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181, 6765, 10946, 17711, 28657, 46368,
    ]);
  });
  test("0th fibonacci number is 0", () => {
    expect(fibonacciGrp.fibs(0)).toBe(0);
  });
  test("doesn't accept negatives", () => {
    expect(fibonacciGrp.fibs(-25)).toBe(undefined);
  });
  test("DOES accept strings", () => {
    expect(fibonacciGrp.fibs("0")).toEqual(0);
  });
  test("DOES accept strings", () => {
    expect(fibonacciGrp.fibs("1")).toEqual([0]);
  });
  test("DOES accept strings", () => {
    expect(fibonacciGrp.fibs("2")).toEqual([0, 1]);
  });
  test("DOES accept strings", () => {
    expect(fibonacciGrp.fibs("8")).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});

describe("fibonacci nth term using recursion", () => {
  test("4th fibonacci number is 3", () => {
    expect(fibonacciGrp.fibonacciTerm(4)).toBe(3);
  });
  test("7th fibonacci number is 13", () => {
    expect(fibonacciGrp.fibonacciTerm(7)).toBe(13);
  });
  test("10th fibonacci number is 55", () => {
    expect(fibonacciGrp.fibonacciTerm(10)).toBe(55);
  });
  test("15th fibonacci number is 610", () => {
    expect(fibonacciGrp.fibonacciTerm(15)).toBe(610);
  });
  test("25th fibonacci number is 75025", () => {
    expect(fibonacciGrp.fibonacciTerm(25)).toBe(75025);
  });
  test("0th fibonacci number is 0", () => {
    expect(fibonacciGrp.fibonacciTerm(0)).toBe(0);
  });
  test("doesn't accept negatives", () => {
    expect(fibonacciGrp.fibonacciTerm(-25)).toBe(undefined);
  });
  test("DOES accept strings", () => {
    expect(fibonacciGrp.fibonacciTerm("0")).toBe(0);
  });
  test("DOES accept strings", () => {
    expect(fibonacciGrp.fibonacciTerm("1")).toBe(1);
  });
  test("DOES accept strings", () => {
    expect(fibonacciGrp.fibonacciTerm("2")).toBe(1);
  });
  test("DOES accept strings", () => {
    expect(fibonacciGrp.fibonacciTerm("8")).toBe(21);
  });
});

