var johnny = 'Johnny Lawrence';
var daniel = 'Daniel LaRusso';

function fight(characterOne, characterTwo) {
    const attackOne = Math.floor(Math.random() * [characterOne.length]);
    const attackTwo = Math.floor(Math.random() * [characterTwo.length]);
    return attackOne > attackTwo ? `${characterOne} wins!` : `${characterTwo} wins!`;
}

const allValleyChamp = fight(johnny, daniel);

console.log(allValleyChamp);