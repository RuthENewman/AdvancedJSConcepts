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
        return `First appeared in season ${this.calculateFirstSeason()}`;
    }
    lastSeason() {
        return `Last appeared in season ${this.calculateLastSeason()}`;
    }
}

class Vampire extends Character {
    constructor(name, firstEpisode, lastEpisode, sire) {
        super(name, firstEpisode, lastEpisode);
        this.sire = sire;
    }
}

const angel = new Vampire('Angel', '101', '722', 'Darla');
console.log(angel.lastSeason());

const spike = new Vampire('Spike', '203', '722', 'Drusilla');
console.log(spike.firstSeason());
