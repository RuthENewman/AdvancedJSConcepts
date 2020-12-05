function letUserLogin(user) {
    let array = [];
    for (let i = 0; i < 10000000; i++) {
        array.push(i);
    }
    return `Access Granted to ${user}`;
}

let adam = letUserLogin('Adam');
let eve = letUserLogin('Eve');

console.log(adam, eve);
