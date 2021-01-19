// e1.addEventListener("click", submitForm);

// // callback pyramid of doom
// movePlayer(100, "Left", function() {
//     movePlayer(400, "Left", function() {
//         movePlayer(10, "Right", function() {
//             movePlayer(330, "Left", function() {
//             });
//         });
//     });
// });

const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Voila!');
    } else {
        reject('Error, computer says no');
    }
})