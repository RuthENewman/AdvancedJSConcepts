// SOLUTION ONE

// const array = [1,2,3,4];
// for(var i=0; i < array.length; i++) {
//     // setTimeout(function() {
//     //     console.log(`I am at index ${i}`);
//     // }, 3000);
//     console.log(`I am at index ${i}`);
// }

// SOLUTION TWO

// const array = [1,2,3,4];
// for(let i=0; i < array.length; i++) {
//     setTimeout(function() {
//         console.log(`I am at index ${i}`);
//     }, 3000);
// }

// SOLUTION THREE WITH 1,2,3,4

// const array = [1,2,3,4];
// for(let i=0; i < array.length; i++) {
//     setTimeout(function() {
//         console.log(`I am at index ${array[i]}`);
//     }, 3000);
// }

// SOLUTION FOUR

const array = [1,2,3,4];
for(let i=0; i < array.length; i++) {
    (function(closureI) {
        setTimeout(function() {
        console.log(`I am at index ${array[closureI]}`);
    }, 3000);
    })(i);
}
