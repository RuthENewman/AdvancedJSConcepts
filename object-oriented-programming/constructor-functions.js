function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = function() {
    return `attack with ${this.weapon}`;
}

Elf.prototype.build = function() {
    const self = this;
    function building() {
        return `${self.name} builds a house`;
    }
    return building();
}

const peter = new Elf('Peter', 'stones');
console.log(Elf.prototype === peter.__proto__); // true
console.log(peter.build());

const sam = new Elf('Peter', 'fire');
console.log(sam.attack());

