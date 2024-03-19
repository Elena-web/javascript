//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (num) => {
  const arr = [];
  if (num > 0 && num < 32) {
    const numBinary = num.toString(2);
    if (numBinary.length <= 5) {
      if (numBinary[numBinary.length - 1] === '1') {
        arr.push('wink');
      }
      if (numBinary[numBinary.length - 2] === '1') {
        arr.push('double blink');
      }
      if (numBinary[numBinary.length - 3] === '1') {
        arr.push('close your eyes');
      }
      if (numBinary[numBinary.length - 4] === '1') {
        arr.push('jump');
      }
      if (numBinary[numBinary.length - 5] === '1') {
        arr.reverse();
      }
    }
  }
  return arr;
};
