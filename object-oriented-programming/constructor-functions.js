function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = function() {
    return `attack with ${this.weapon}`;
}

const peter = new Elf('Peter', 'stones');
console.log(Elf.prototype === peter.__proto__); // true

const sam = new Elf('Peter', 'fire');
console.log(sam.attack());

