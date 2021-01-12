const multiply = (a, b, c) => a * b * c;

const curriedMultiply = (a) => (b) => (c) => a * b * c;

curriedMultiply(6)(3)(10); // returns 180 - i.e. (ONE HUNDRED AND EIGHTY!)

const partialMultiplyBy5 = multiply.bind(null, 5);

partialMultiplyBy5(4, 10); // returns 200