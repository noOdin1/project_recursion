/* merge_sort_recursion.js */

const merge_sort = (arg) => {
  // check if the 'arg' is an array
  if (!Array.isArray(arg)) {
    return undefined;
  }
  // Base case
  if (arg.length < 2) {
    return arg;
  }
  let midpnt = arg.length / 2;

  let retLs = merge_sort(arg.slice(0, midpnt));
  let retRs = merge_sort(arg.slice(midpnt, arg.length));

  // if (arg.length == 2) {
  //   if (retLs[0] < retRs[0]) return [retLs[0], retRs[0]];
  //   return [retRs[0], retLs[0]];
  // }
  if (retLs !== undefined && retRs !== undefined) {
    return retLs.concat(retRs).sort((a, b) => a - b);
  }
};

export { merge_sort };
