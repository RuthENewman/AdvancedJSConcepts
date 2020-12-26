const elfFunctionsStore = {
    attack() {
        return `attack with ${this.weapon}`;
    }
}

function createElf(name, weapon) {
    let newElf = Object.create(elfFunctionsStore);
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const peter = createElf('Peter', 'stones');
console.log(peter.attack());

const sam = createElf('Peter', 'fire');
console.log(sam.attack());