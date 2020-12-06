const giveAccessTo = (username) => `Access granted to ${username}`;

function authenticate(verify) {
    let array = [];
    for (let i = 0; i < verify; i++) {
        array.push(i);
    }
    return true;
} 

function letPersonLogin(person, fn) {
    if (person.level === 'admin') {
        fn(5000000);
    } else if (person.level === 'user') {
        fn(1000000);
    }
    return giveAccessTo(person.name);
}

let captain = letPersonLogin({level: 'admin', name: 'Raymond'}, authenticate);
let detective = letPersonLogin({level: 'user', name: 'Jake'}, authenticate);

console.log(captain, detective);
