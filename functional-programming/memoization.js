function addTo80(num) {
    console.log('slow running function');
    return num + 80;
}

addTo80(5); // calculates and returns 85
addTo80(5); // calculates and returns 85
addTo80(5); // calculates and returns 85

function memoizeAddTo80() {
    let cache = {};
    return function(num) {
        if (num in cache) {
            return cache[num];
        } else {
            console.log('slowly......');
            cache[num] = num + 80;
            return cache[num];
        }
    }
}

const memoized = memoizeAddTo80();

console.log('1', memoized(5)); // calculates and returns 85
console.log('2', memoized(5)); // returns 85 from the cache object
console.log('2', memoized(5)); // returns 85 from the cache object

