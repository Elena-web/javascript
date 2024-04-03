//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (str) => {
  const arr = str.replace(/\s/g, '').split('');
  if (arr.length > 1 && /^[0-9\s]+$/.test(str) && arr.length <= 20) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if ((arr.length % 2 === 0 && (i === 0 || i % 2 === 0))
      || (arr.length % 2 !== 0 && i % 2 !== 0)) {
        if (arr[i] !== '9') {
          arr[i] *= 2;
          if (arr[i] > 9) {
            arr[i] -= 9;
          }
        }
      }
      sum += Number(arr[i]);
    }
    return sum % 10 === 0;
  }
  return false;
};
