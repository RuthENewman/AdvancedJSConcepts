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
    heal() {
        return this.health = 100;
    }
}

const archer = {
    name: 'Robin Hood',
    health: 30
}

wizard.heal.call(archer);

console.log(archer.health);