// no side effects
// input --> output

const array = [1,2,3];
function removeLastItem(arr) {
    const newArray = [].concat(arr);
    newArray.pop();
    return newArray;
}
function multiplyByTwo(arr) {
    return arr.map(item => item * 2);
}

const shorterArray = removeLastItem(array);
const doubledArray = multiplyByTwo(array);

console.log('Original array', array);
console.log('Short array', shorterArray);
console.log('Original array', array);