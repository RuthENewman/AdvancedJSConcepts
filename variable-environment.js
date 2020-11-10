function two() {
    var isValid;
}

function one() {
    var isValid = true; // local environment
    two(); // new execution context
}

var isValid = false;
console.log(one());

// two() --undefined
// one() --true
// global() --false