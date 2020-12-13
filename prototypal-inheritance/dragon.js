let dragon = {
    name: 'Drogon',
    fire: true,
    fight() {
        return 5;
    },
    sing() {
        if (this.fire) {
            return `I am ${this.name}, the breather of fire`;
        }
    }
}

dragon.sing();
dragon.fight();

let lizard = {
    name: 'Komodo',
    fight() {
        return 1;
    }
}

lizard.__proto__ = dragon;
console.log(lizard.sing());
console.log(lizard.fire);
console.log(lizard.fight());