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

const four = new Function('num', 'return num');

const fourCall = four(4);

function heyGday() {
    console.log('bonjour');
}

console.log(twoCall);
console.log(threeCall);
console.log(fourCall);
heyGday();
console.log(heyGday.name);