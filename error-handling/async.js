Promise.resolve('asyncfail')
    .then(response => {
        Promise.resolve().then(() => {
            throw new Error('#3 fail');
        }).catch(console.log)
        return 5
    })
    .then(response => {
        console.log(response);
    })
    .then(response => {
        console.log(response.message);
    })
    .catch(error => {
        console.log('final error');
    })