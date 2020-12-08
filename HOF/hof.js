const giveAccessTo = (username) => `Access granted to ${username}`;

function authenticate(verify, person) {
    let array = [];
    for (let i = 0; i < verify; i++) {
        array.push(i);
    }
    return giveAccessTo(person.name);
} 

function sing(verify, person) {
    return `${person.name} goes la la la la la`;
}

function letPersonLogin(person, fn) {
    if (person.level === 'admin') {
        return fn(1000000, person);
    } else if (person.level === 'user') {
        return fn(5000000, person);
    }
}

let captain = letPersonLogin({level: 'admin', name: 'Raymond'}, authenticate);
let detective = letPersonLogin({level: 'user', name: 'Jake'}, authenticate);
let fito = letPersonLogin({level: 'user', name: 'Fito'}, sing);

console.log(captain, detective);
console.log(fito);
