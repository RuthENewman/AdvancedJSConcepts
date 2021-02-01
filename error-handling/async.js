Promise.resolve('asyncfail')
    .then(response => {
        throw new Error('# fail');
        return response;
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })