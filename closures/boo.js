function boo(string) {
    return function(name) {
        return function(name2) {
            console.log(`${string} ${name} ${name2}`);
        }
    }
}

// ES6
const boohoo = (string) => (name) => (name2) => console.log(`${string} ${name} ${name2}`);

boo('hi')('rory')('lane');
boohoo('bye')('sookie')('michel');

const booString = boo('hiya');
// time passes
const booStringName = booString();
console.log(booStringName);