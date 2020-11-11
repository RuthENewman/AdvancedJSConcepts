var x = 'x';

function findName() {
    console.log(x);
    var b = 'b';
    return printName();
}

function printName() {
    console.log(x);
    var c = 'c';
    return "Ruth Newman";
}

function sayMyName() {
    var a = 'a';
    return findName();
}

sayMyName();