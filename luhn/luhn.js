//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (str) => {
  const arr = str.replace(/\s/g, '').split('');
  if (arr.length > 1
    && arr.every((element) => !Number.isNaN(parseInt(element, 10)))
    && arr.length <= 20) {
    let sum = 0;
    for (let i = arr.length - 2; i >= 0; i -= 2) {
      if (arr[i] !== '9') {
        arr[i] *= 2;
        if (arr[i] > 9) {
          arr[i] -= 9;
        }
      }
    }
    for (let j = 0; j < arr.length; j += 1) {
      sum += Number(arr[j]);
    }
    return sum % 10 === 0;
  }
  return false;
};
