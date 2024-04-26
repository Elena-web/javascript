//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (arr) => {
  // Заменяю пробелы на '+'
  const arrWithPlus = [];
  for (let i = 0; i < arr.length; i += 1) {
    const str = arr[i].replace(/\s/g, '+');
    arrWithPlus.push(str);
  }
  const transposedArr = [];
  let maxLength = 0;
  for (let i = 0; i < arrWithPlus.length; i += 1) {
    if (arrWithPlus[i].length > maxLength) {
      maxLength = arrWithPlus[i].length;
    }
  }
  for (let i = 0; i < maxLength; i += 1) {
    let str = '';
    for (let j = 0; j < arrWithPlus.length; j += 1) {
      if (i < arrWithPlus[j].length) {
        str += arrWithPlus[j][i];
      } else if (j < arrWithPlus.length - 1 && arrWithPlus[j][i - 1] !== '+') {
        str += ' ';
      }
    }
    // Удаляю пробелы в конце строки
    transposedArr.push(str.trimRight());
  }
  // Заменяю '+' with spaces
  for (let i = 0; i < transposedArr.length; i += 1) {
    transposedArr[i] = transposedArr[i].replace(/\+/g, ' ');
  }
  return transposedArr;
};
