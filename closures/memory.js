// Memory efficient

function heavyDuty(index) {
    const sevenThousandBees = new Array(7000).fill('B');
    console.log('created array');
    return sevenThousandBees[index];
}

const bee = heavyDuty(677);
heavyDuty(677);
heavyDuty(677);
console.log(bee);

const getHeavyDuty = moreHeavyDuty();
getHeavyDuty(677);
getHeavyDuty(1712);
getHeavyDuty(913);

function moreHeavyDuty(index) {
    const sevenThousandBees = new Array(7000).fill('B');
    console.log('created array');
    return function(index) {
        return sevenThousandBees[index];
    }
}

// Encapsulation

const detonate = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return 'Boom';
    }

    setInterval(passTime, 1000);
    return { totalPeaceTime }
}

const disaster = detonate();
disaster.totalPeaceTime();