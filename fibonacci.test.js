// import { fibonacciGrp } from "./fibonacci";
const fibonacciGrp = require("./fibonacci");

describe("fibonacci using iterative method", () => {
  test("4th fibonacci number is 3", () => {
    expect(fibonacciGrp.fibs(4)).toBe(3);
  });
  test("7th fibonacci number is 13", () => {
    expect(fibonacciGrp.fibs(7)).toBe(13);
  });
  test("10th fibonacci number is 55", () => {
    expect(fibonacciGrp.fibs(10)).toBe(55);
  });
  test("15th fibonacci number is 610", () => {
    expect(fibonacciGrp.fibs(15)).toBe(610);
  });
  test("25th fibonacci number is 75025", () => {
    expect(fibonacciGrp.fibs(25)).toBe(75025);
  });
  test("0th fibonacci number is 0", () => {
    expect(fibonacciGrp.fibs(0)).toBe(0);
  });
  test("doesn't accept negatives", () => {
    expect(fibonacciGrp.fibs(-25)).toBe("OOPS");
  });
  test("DOES accept strings", () => {
    expect(fibonacciGrp.fibs("0")).toBe(0);
  });
  test("DOES accept strings", () => {
    expect(fibonacciGrp.fibs("1")).toBe(1);
  });
  test("DOES accept strings", () => {
    expect(fibonacciGrp.fibs("2")).toBe(1);
  });
  test("DOES accept strings", () => {
    expect(fibonacciGrp.fibs("8")).toBe(21);
  });
});

