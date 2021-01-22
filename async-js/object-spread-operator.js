const animals = {
    lions: 8,
    tigers: 12,
    bears: 24,
    monkeys: 0
}

function objectSpread(p1,p2,p3) {
    console.log(p1);
    console.log(p2);
    console.log(p3);
}


const { tigers, lions, ...rest} = animals;

objectSpread(tigers, lions, rest);