// function currying

function multiply(a, b) {
    return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(4));

let multiplyByEighteen = multiply.bind(this, 18);

console.log(multiplyByEighteen(10));