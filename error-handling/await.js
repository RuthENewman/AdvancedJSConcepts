(async function() {
    try {
        await Promise.reject('oops')
    } catch (error) {
        console.log(error);
    }
    console.log('still running?');
})();

