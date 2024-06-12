//Apply Transform Over Each Element in Array

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.


const map = function (arr, fun){
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        result.push(fun(arr[i], i))
    }
    return result;
}

const arr = [1, 2, 3];
const plusone = function(n) {
  return n + 1;
};

const newArray = map(arr, plusone);
console.log(newArray);