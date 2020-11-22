let yes = true.toString();

console.log(typeof yes, yes);

let yep = Boolean(true).toString();

console.log(typeof yep, yep);


//

var array = [1,2,3];

var arrayTwo = {
    0: 1,
    1: 2,
    2: 2
};

console.log(typeof array);
console.log(typeof arrayTwo);

console.log(Array.isArray([1,2,3,4,5]));
console.log(Array.isArray({}));