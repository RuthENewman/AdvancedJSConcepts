// Extending the functionality of a built in object

// #1 The Date object
// New mothod .previousYear();

Date.prototype.previousYear = function() {
    return this.getFullYear() - 1;
}

const lastYear = new Date('2020-12-20').previousYear();

console.log(lastYear);
// returns 2019