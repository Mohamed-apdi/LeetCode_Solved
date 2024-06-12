
// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.


const filtering = function(arr, fn) {
    let res = [];

    for(let i = 0; i < arr.length; i++){
        // if(fn(arr[i],i)){
        //     res.push(arr[i]);
        // }
        res.push(fn(arr[i], i))
    }
    return res;
}


const arr = [1,2,3,4];

function isEven(num, i){
    return num % 2 === 0;
}

function onlyOne (num, i){
    return num === 2;
}

const fina = filtering(arr, onlyOne)
console.log(fina)

const final = filtering(arr, isEven);
    console.log(final)


function isOdd(num, i){
    return num % 3 === 0;
}

const finals = filtering(arr, isOdd)
console.log(finals)