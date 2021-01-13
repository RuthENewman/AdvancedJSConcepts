// Compose

const compose = (f, g) => (data) => f(g(data));
const multiplyByThree = (num) => num * 3;
const makePositive = (num) => Math.abs(num);
const absoluteMltiplyByThree = compose(multiplyByThree, makePositive);

const result = absoluteMltiplyByThree(-50);
console.log(result);