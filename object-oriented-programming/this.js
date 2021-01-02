// new binding this

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Xander', 17);

// implicit binding 
const person = {
    name: 'Giles',
    age: 43,
    hi() {
        console.log(`Hi, ${this.name}`);
    }
}

// explicit binding 
const person2 = {
    name: 'Cordelia',
    age: 18,
    hi: function() {
        console.log('Hi ' + this.setTimeout)
    }.bind(window)
}

// person2.hi();

// arrow functions
const person3 = {
    name: 'Jenny',
    age: 35,
    hi: function() {
        var inner = () => {
            console.log(`Hi, ${this.name}`);
        }
    }
}

person3.hi();