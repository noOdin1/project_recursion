/* merge_sort_recursion.test.js */
import { merge_sort } from "./merge_sort_recursion";

describe("Merge sort using recursion", () => {
  test("Empty array test", () => {
    expect(merge_sort([])).toEqual([]);
  });

  test("Array with only 1 element", () => {
    expect(merge_sort([73])).toEqual([73]);
  });

  test("Array with 5 elements sorted, expect the same back", () => {
    expect(merge_sort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("Array with 8 elements with repeated values, expect sorted array", () => {
    expect(merge_sort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13,
    ]);
  });

  test("Array with 4 elements of large values, expect sorted array", () => {
    expect(merge_sort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
  });

  test("Array with 12 elements, 1 to 12 sorted", () => {
    expect(merge_sort([4, 11, 2, 3, 9, 7, 5, 10, 6, 1, 8, 12])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    ]);
  });
});
