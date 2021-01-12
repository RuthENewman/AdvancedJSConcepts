function addTo80(num) {
    console.log('slow running function');
    return num + 80;
}

addTo80(5); // calculates and returns 85
addTo80(5); // calculates and returns 85
addTo80(5); // calculates and returns 85

let cache = {};
function memoizeAddTo80(num) {
    if (num in cache) {
        return cache[num];
    } else {
        console.log('slowly......');
        cache[num] = num + 80;
        return cache[num];
    }
}

console.log('1', memoizeAddTo80(5)); // calculates and returns 85
console.log('2', memoizeAddTo80(5)); // returns 85 from the cache object
console.log('2', memoizeAddTo80(5)); // returns 85 from the cache object

