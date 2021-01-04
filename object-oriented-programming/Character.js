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
}

const angel = new Vampire('Angel', '101', '722', 'Darla');
console.log(angel.lastSeason());

const spike = new Vampire('Spike', '203', '722', 'Drusilla');
console.log(spike.firstSeason());

const buffy = new Slayer('Buffy', '101', '722', 'Giles');
console.log(`${buffy.name}'s watcher is ${buffy.watcher}.`);

const kendra = new Slayer('Kendra', '210', '222', 'Sam');
console.log(kendra.lastSeason());

const faith = new Slayer('Faith', '303', '722', 'Wesley');
console.log(faith.firstSeason());