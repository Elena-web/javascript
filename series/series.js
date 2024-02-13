// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    this._series = series;
  }

  slices(sliceLength) {
    if(this._series.length === 0) {
      throw new Error('series cannot be empty');
    }
    if(this._series.length < sliceLength) {
      throw new Error('slice length cannot be greater than series length');
    }
    if(sliceLength === 0) {
      throw new Error('slice length cannot be zero');
    }
    if(sliceLength < 0) {
      throw new Error('slice length cannot be negative');
    }

    let arr = [];

    for(let i = 0; i <= this._series.length - sliceLength; i++) {
      let arr1 = []; 
      for(let j = 0; j < sliceLength; j++) {
          arr1.push(parseInt(this._series.substring(i + j, i + j + 1)));
      }
      arr.push(arr1);
  }

  return arr;
  }
}

