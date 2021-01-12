const hof = () => () => 5;
const singleHofCall = hof(); // returns a function
console.log(singleHofCall);
const calledTwice = hof()(); // returns 5
console.log(calledTwice);

const anotherHOF = (fn) => fn(15);
const functPassed = anotherHOF(function a(x) { return x }); 
console.log(functPassed);