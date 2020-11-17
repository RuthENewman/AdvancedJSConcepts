function a() {
    console.log('hi');
}

a.call();
a.apply();
a();

//

const wizard = {
    name: 'Merlin',
    health: 100,
    heal(num1, num2) {
        return this.health += num1 + num2;
    }
}

const archer = {
    name: 'Robin Hood',
    health: 30
}

// wizard.heal.call(archer, 50, 10);
// wizard.heal.apply(archer, [40, 15]);
const healArcher = wizard.heal.bind(archer, 25, 20);

healArcher();

console.log(archer.health);

// Exercise

const array = [1,2,3];

function getMaxNumber(arr) {
    return Math.max.apply(null, arr);
}

getMaxNumber(array);