const character = {
    name: 'Chandler',
    getCharacter() {
        return this.name;
    }
}

const giveMeTheCharacterNOW = character.getCharacter.bind(character);

console.log('?', giveMeTheCharacterNOW());

// alternative solution
const giveMeTheCharacterNow = character.getCharacter();

console.log('?', giveMeTheCharacterNow);