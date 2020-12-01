const objectOne = {
    two() {
        return 2;
    }
}

const twoCall = objectOne.two();

function three() {
    return 3;
}

const threeCall = three.call();

console.log(twoCall);
console.log(threeCall);