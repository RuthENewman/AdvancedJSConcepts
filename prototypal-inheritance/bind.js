Function.prototype.bind = function(calledBy){
    const self = this;
    return function() {
        return self.call(calledBy, arguments);
    }
}

// or  

// Function.prototype.bind = function() {
//     const self = this;
//     return function() {
//         return self.apply(calledBy, arguments);
//     }
// }