const johnny = 'Johnny Lawrence';
const daniel = 'Daniel LaRusso';

function jump() {

}

export function fight(characterOne, characterTwo) {
    const attackOne = Math.floor(Math.random() * [characterOne.length]);
    const attackTwo = Math.floor(Math.random() * [characterTwo.length]);
    return attackOne > attackTwo ? `${characterOne} wins!` : `${characterTwo} wins!`;
}
