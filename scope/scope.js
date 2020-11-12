// Function scope
// vs
// block scope

if (5 > 4) {
    const secret = '12345';
}

// will error due to block scoping with const & let
// console.log(secret);

function loop() {
    for(let i = 0; i < 5; i++) {
        console.log(i);
    }
    // will error due to block scoping with const & let
    // console.log('final', i);
}

loop();