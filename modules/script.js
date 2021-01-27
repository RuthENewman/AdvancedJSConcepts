// IIFE - immediately invoked function expression
// Module Pattern

var fightModule = (function() {
    var johnny = 'Johnny Lawrence';
    var daniel = 'Daniel LaRusso';

    function fight(characterOne, characterTwo) {
        const attackOne = Math.floor(Math.random() * [characterOne.length]);
        const attackTwo = Math.floor(Math.random() * [characterTwo.length]);
        return attackOne > attackTwo ? `${characterOne} wins!` : `${characterTwo} wins!`;
    }

    return {
        fight: fight
    }
    })()

// Global Scope
    // Module Scope
        // Function scope
            // Block scope