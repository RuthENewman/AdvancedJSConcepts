const myError = new Error('oops');

console.log(myError.stack);

function a() {
    const b = new Error('what?');
    return b;
}

console.log(a().stack);
