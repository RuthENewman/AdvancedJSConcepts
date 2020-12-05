function letAdamLogin() {
    let array = [];
    for (let i = 0; i < 10000000; i++) {
        array.push(i);
    }
    return 'Access Granted to Adam';
}

function letEveLogin() {
    let array = [];
    for (let i = 0; i < 10000000; i++) {
        array.push(i);
    }
    return 'Access Granted to Eve';
}

letAdamLogin();