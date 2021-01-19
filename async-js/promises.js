const promiseOne = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'You');
});

const promiseTwo = new Promise((resolve, rejet) => {
    setTimeout(resolve, 1000, 'were');
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'myth-taken');
});

Promise.all([promiseOne, promiseTwo, promiseThree])
        .then(values => {
            console.log(values);
        });
