function virginia() {
    let darla = 'Darla'
    return function liam() {
        let angel = 'Angel'
        return function dru() {
            let drusilla = 'Drusilla'
            return function william() {
                let spike = 'Spike'
                return `${darla} sired ${angel} who sired ${drusilla} who sired ${spike}`;
            }
        }
    }
}

const seventeenFiftyThree = virginia();
const eighteenSixty = virginia()();
const eighteenEighty = virginia()()();
const fangedFour = virginia()()()();

console.log(seventeenFiftyThree);
console.log(eighteenSixty);
console.log(eighteenEighty);
console.log(fangedFour);