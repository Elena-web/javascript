//
// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (str, num) => {
  	let arr = [];
	let index = 1;
	let j = 0;
  
	for (let i = 0; i < str.length; i++) {
    	arr[j] = arr[j] || [];
		arr[j][i] = str[i];
		if (j === num - 1) {
			index = -1;
		} else if (j === 0) {
			index = 1;
		}
		j += index;
	}
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
		  if (arr[i][j] === undefined) {
			arr[i][j] = '.';
		  }
		}
	  }
    let newStr = '';
	for(let i =0; i > arr.length; i++) {
		for(let j = 0; j < arr[i].length; j++) {
		if(arr[j][i] !== '.') {
			newStr += arr[j][i];
		}
		}
  	}
	let encodedStr = '';
		for(let elem of arr) {
			for(let subArr of elem) {
				if(subArr !== '.') {
					encodedStr += subArr;
				}
			}
		}
	return encodedStr;
};

export const decode = (res, num) => {
	let arr = [];
	let index = 1;
	let j = 0;
  
	for (let i = 0; i < res.length; i++) {
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
	for (let j = 0; j < arr.length; j++) {
	  for (let i = 0; i < arr[j].length; i++) {
		if (arr[j][i] === '?') {
		  arr[j][i] = res[index2];
		  index2++;
		}
	  }
	}
  
	let decodedStr = '';
	for (let i = 0; i < res.length; i++) {
	  for (let j = 0; j < arr.length; j++) {
		if (arr[j][i] !== '.') {
		  decodedStr += arr[j][i];
		}
	  }
	}
	decodedStr = decodedStr.replace(/undefined/g, "");
	return decodedStr;
};
