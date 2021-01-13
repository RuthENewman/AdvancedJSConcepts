// Compose

const compose = (f, g) => (data) => f(g(data));
const multiplyByThree = (num) => num * 3;
const makePositive = (num) => Math.abs(num);
const absoluteMltiplyByThree = compose(multiplyByThree, makePositive);

const composedResult = absoluteMltiplyByThree(-50);
console.log(composedResult);

// Pipe

const pipe = (k, l) => (data) => l(k(data));
const findAQuarter = (num) => num / 4;
const roundUp = (num) => Math.ceil(num);
const roundedQuarter = pipe(findAQuarter, roundUp);

const pipedResult = roundedQuarter(30);
console.log(pipedResult);