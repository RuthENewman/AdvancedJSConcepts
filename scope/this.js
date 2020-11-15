const obj = {
    name: 'Charlotte',
    sing() {
        return this.name + ' goes lalala';
    },
    singAgain() {
        return this.sing() + ' lalala';
    }
}

const performance = obj.sing();
const gig = obj.singAgain();

console.log(performance, gig);

// Important People

function importantPerson() {
    console.log(this.name);
}

const name = 'Joe';
const obj1 = {
    name: 'Stacey',
    importantPerson: importantPerson
}
const obj2 = {
    name: 'Raphael',
    importantPerson: importantPerson
}

obj1.importantPerson();