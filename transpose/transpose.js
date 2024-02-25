//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (arr) => {
  let arr1 = [];
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
    }
  }
  for (let i = 0; i < maxLength; i++) {
    let str = '';
    for (let j = 0; j < arr.length; j++) {
      if (i < arr[j].length) {
        str += arr[j][i];
      } else {
        if(j < arr.length - 1) {
          str += ' ';
        }
        }
      }
     arr1.push(str);
  }
  return arr1;
}
