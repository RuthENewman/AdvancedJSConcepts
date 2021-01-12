const multiply = (a, b) => a * b;

multiply(3,4); // returns 12

const curriedMultiply = (a) => (b) => a * b;

curriedMultiply(3)(5); // returns 15

const curriedMultiplyBy5 = curriedMultiply(5);

curriedMultiplyBy5(4); // returns 20
curriedMultiplyBy5(8); // returns 40
curriedMultiplyBy5(6); // returns 30