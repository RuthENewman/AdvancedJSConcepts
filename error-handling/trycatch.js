function fail() {
    try {
        console.log('this works');
        throw new Error('oops!');
    } catch (error) {
        console.log(error.message);
    }
}

fail();