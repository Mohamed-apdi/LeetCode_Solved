function compose(functions) {
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
}

// Example usage:
const functions = [
    x => x + 1,//3
    x => x * x,//4
    x => 2 * x //4
];
const x = 2;

const composedFunction = compose(functions);
const result = composedFunction(x);
console.log(result); // Output: 65



const fn1 = x => x + 1;
const fn2 = x => 2 * x;

// console
console.log(fn1(fn2(4)))