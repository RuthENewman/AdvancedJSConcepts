const animals = {
    lions: 8,
    tigers: 12,
    bears: 24
}

const { tigers, ...rest} = animals;

console.log(tigers);
console.log(rest);

const array = [1,2,3,4,5,6,7,8,9,10];
function sum(a, b, c, d, e, f, g, h, i, j) {
    return a + b + c + d + e + f + g + h + i + j;
}
console.log(sum(...array));

const chords = ['Gm', 'Cm', 'Dm', 'Gm'];