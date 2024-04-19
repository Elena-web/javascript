//
// This is only a SKELETON file for the 'Knapsack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const knapsack = (maximumWeight, items) => {
  const count = items.length;
  const arr = [];

  for (let i = 0; i < count + 1; i += 1) {
    arr[i] = [];
    for (let j = 0; j < maximumWeight + 1; j += 1) {
      arr[i][j] = 0;
    }
  }

  for (let k = 1; k <= count; k += 1) {
    for (let s = 1; s <= maximumWeight; s += 1) {
      if (s >= items[k - 1].weight) {
        arr[k][s] = Math.max(
          arr[k - 1][s],
          arr[k - 1][s - items[k - 1].weight] + items[k - 1].value,
        );
      } else {
        arr[k][s] = arr[k - 1][s];
      }
    }
  }

  return arr[count][maximumWeight];
};
