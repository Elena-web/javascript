export const encode = (str, num) => {
  const arr = [];
  let index = 1;
  let j = 0;
  for (let i = 0; i < str.length; i += 1) {
    arr[j] = arr[j] || [];
    arr[j][i] = str[i];
    if (j === num - 1) {
      index = -1;
    } else if (j === 0) {
      index = 1;
    }
    j += index;
  }
  for (let i = 0; i < arr.length; i += 1) {
    for (let k = 0; k < arr[i].length; k += 1) {
      if (arr[i][k] === undefined) {
        arr[i][k] = '.';
      }
    }
  }
  let encodedStr = '';
  arr.forEach((elem) => {
    elem.forEach((subArr) => {
      if (subArr !== '.') {
        encodedStr += subArr;
      }
    });
  });
  return encodedStr;
};

export const decode = (res, num) => {
  const arr = [];
  let index = 1;
  let j = 0;
  for (let i = 0; i < res.length; i += 1) {
    arr[j] = arr[j] || [];
    arr[j][i] = '?';
    if (j === num - 1) {
      index = -1;
    } else if (j === 0) {
      index = 1;
    }
    j += index;
  }
  let index2 = 0;
  for (let n = 0; n < arr.length; n += 1) {
    for (let i = 0; i < arr[n].length; i += 1) {
      if (arr[n][i] === '?') {
        arr[n][i] = res[index2];
        index2 += 1;
      }
    }
  }
  let decodedStr = '';
  for (let i = 0; i < res.length; i += 1) {
    for (let k = 0; k < arr.length; k += 1) {
      if (arr[k][i] !== '.') {
        decodedStr += arr[k][i];
      }
    }
  }
  decodedStr = decodedStr.replace(/undefined/g, '');
  return decodedStr;
};
