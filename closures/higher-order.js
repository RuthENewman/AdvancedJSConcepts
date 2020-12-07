const multiplyBy = (num1) => (num2) => num1 * num2;

const multiplyByTwo = multiplyBy(2);

const result = multiplyByTwo(24);
const anotherResult = multiplyByTwo(8);

const mutliplyByFive = multiplyBy(5);

const score = mutliplyByFive(35);
const anotherScore = mutliplyByFive(81);

console.log(result);
console.log(anotherResult);

console.log(score, anotherScore);