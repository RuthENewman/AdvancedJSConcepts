console.log('1------');

// undefined
console.log(key);

// hoisted
console.log(cantar());

var key = 'dawn';

// function expression
var letra = function() {
    console.log('la vida es un carnaval, hay que vivir cantando...');
}

console.log(letra());

function cantar() {
    console.log('aay no hay que llorar...');
}