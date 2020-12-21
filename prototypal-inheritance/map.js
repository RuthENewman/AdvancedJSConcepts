//#Bonus
// Mofify .map() to print '🗺' at the end of each item.
Array.prototype.map = function() {
    let array = [];
    for (let i = 0; i < this.length; i++) {
        array.push((this[i] + '🗺)'));
    }
    return array;
}

console.log([1,2,3].map())
//1🗺, 2🗺, 3🗺