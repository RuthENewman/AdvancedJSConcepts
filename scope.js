// Function scope
// vs
// block scope

if (5 > 4) {
    const  secret = '12345';
}

// will error due to block scoping with const & let
// console.log(secret);


function loop() {
    for(var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('final', i);
}

loop();