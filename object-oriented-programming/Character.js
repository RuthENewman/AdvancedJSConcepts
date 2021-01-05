// ES6 class
class Character {
    constructor(name, firstEpisode, lastEpisode) {
        this.name = name;
        this.firstEpisode = firstEpisode;
        this.lastEpisode = lastEpisode;
    }
    calculateFirstSeason() {
        return this.firstEpisode[0];
    }
    calculateLastSeason(){
        return this.lastEpisode[0];
    }
    firstSeason() {
        return `${this.name} first appears in season ${this.calculateFirstSeason()}.`;
    }
    lastSeason() {
        return `${this.name} last appears in season ${this.calculateLastSeason()}.`;
    }
}

class Vampire extends Character {
    constructor(name, firstEpisode, lastEpisode, sire) {
        super(name, firstEpisode, lastEpisode);
        this.sire = sire;
    }
}

class Slayer extends Character {
    constructor(name, firstEpisode, lastEpisode, watcher) {
        super(name, firstEpisode, lastEpisode);
        this.watcher = watcher;
    }
    nameWatcher() {
        return `${this.name}'s watcher is ${buffy.watcher}.`;
    }
}

class Witch extends Character {
    constructor(name, firstEpisode, lastEpisode) {
        super(name, firstEpisode, lastEpisode)
    }
}

const angel = new Vampire('Angel', '101', '722', 'Darla');
console.log(angel.lastSeason());

const spike = new Vampire('Spike', '203', '722', 'Drusilla');
console.log(spike.firstSeason());

const buffy = new Slayer('Buffy', '101', '722', 'Giles');
console.log(buffy.nameWatcher());

const kendra = new Slayer('Kendra', '210', '222', 'Sam');
console.log(kendra.lastSeason());

const faith = new Slayer('Faith', '303', '722', 'Wesley');
console.log(faith.firstSeason());

const willow = new Witch('Willow', '101', '722');

const tara = new Witch('Tara', '410', '620');

const amy = new Witch('Amy', '101', '713');

console.log(Slayer.isPrototypeOf(buffy)); // false
console.log(Slayer.prototype.isPrototypeOf(buffy)); // true
console.log(Character.prototype.isPrototypeOf(Slayer)); // false
console.log(Character.prototype.isPrototypeOf(Slayer.prototype)); // true
console.log(faith instanceof Vampire); // false
console.log(spike instanceof Vampire); // true
console.log(angel instanceof Character); // true