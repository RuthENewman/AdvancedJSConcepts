const johnny = 'Johnny Lawrence';
const daniel = 'Daniel LaRusso';

export function jump() {
    console.log('JUMP!');
}

export default function fight(characterOne, characterTwo) {
    const attackOne = Math.floor(Math.random() * [characterOne.length]);
    const attackTwo = Math.floor(Math.random() * [characterTwo.length]);
    return attackOne > attackTwo ? `${characterOne} wins!` : `${characterTwo} wins!`;
}
