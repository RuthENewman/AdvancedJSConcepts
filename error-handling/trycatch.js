function fail() {
    try {
        consol.log('this works');
    } catch (error) {
        console.log('made an error somewhere');
    }
}

fail();