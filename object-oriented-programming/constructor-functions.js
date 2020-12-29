function elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}


const peter = new elf('Peter', 'stones');
// console.log(peter.attack());

const sam = new elf('Peter', 'fire');
// console.log(sam.attack());

const Elf1 = new Function('name', 'weapon', 
`this.name = name;
this.weapon = weapon;`);

const sarah = new Elf1('Sarah', 'fireworks');

console.log(sarah);