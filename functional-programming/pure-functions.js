// no side effects
// input --> output

const array = [1,2,3];
function removeLastItem(arr) {
    const newArray = [].concat(arr);
    newArray.pop();
    return newArray;
}
function shortenArray(arr) {
    arr.pop();
}
function lengthenArray(arr) {
    arr.forEach(item => {
        arr.push(1);
    });
}

// shortenArray(array);
// console.log(array);
console.log(removeLastItem(array));
console.log(array);
lengthenArray(array);
console.log(array);