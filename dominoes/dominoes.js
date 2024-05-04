//
// This is only a SKELETON file for the 'Dominoes' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const chain = (dominoes) => {
  if (dominoes.length === 0) {
    return dominoes;
  } if (dominoes.length === 1 && dominoes[0][0] === dominoes[0][1]) {
    return dominoes;
  }
  const chainArr = [];
  if (dominoes.length > 1) {
    chainArr.push(dominoes[dominoes.length - 1]);
    dominoes.pop();
    for (let i = 0; i <= dominoes.length + 2; i += 1) {
      for (let j = 0; j < dominoes.length; j += 1) {
        const dominoe = dominoes[j];
        if (dominoe[0] === chainArr[chainArr.length - 1][1]) {
          chainArr.push(dominoe);
          dominoes.splice(j, 1);
          j -= 1;
        } else if (dominoe[0] === chainArr[0][0]) {
          chainArr.unshift(dominoe.reverse());
          dominoes.splice(j, 1);
          j -= 1;
        } else if (dominoe[1] === chainArr[0][0]) {
          chainArr.unshift(dominoe);
          dominoes.splice(j, 1);
          j -= 1;
        } else if (dominoe[1] === chainArr[chainArr.length - 1][1]) {
          chainArr.push(dominoe.reverse());
          dominoes.splice(j, 1);
          j -= 1;
        }
      }
    }
  }
  if (dominoes.length === 0 && chainArr[0][0] === chainArr[chainArr.length - 1][1]) {
    return dominoes;
  }
  return null;
};
