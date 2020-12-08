// 1
var stuff = function() {
    
}

// 2
function a(fn) {
    fn();
}

a(function() { console.log('lions and tigers and bears')});

// 3
function b() {
    return function() { console.log('oh my'); }
}

// 4
var d = b();

d();