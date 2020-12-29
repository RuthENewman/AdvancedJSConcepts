function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = function() {
    return `attack with ${this.weapon}`;
}

const peter = new Elf('Peter', 'stones');
console.log(peter.attack());

const sam = new Elf('Peter', 'fire');
console.log(sam.attack());

