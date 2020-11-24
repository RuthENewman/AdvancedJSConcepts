var a = 17;
var b = a;

b++;

console.log(a);
console.log(b);

// pass by reference example

let obj1 = { name: 'Andy', password: 'password123' };
let obj2 = obj1;

obj2.password = 'newpassword456';

console.log(obj1);
console.log(obj2);

// also applies in reverse

var c = [1,2,3,4,5];
var d = c;

d.push(6);
console.log(d);
console.log(c);

// alt with clone
var e = [6,7,8,9,10];
var f = [].concat(e);
f.push(11);
console.log(e);
console.log(f);

// cloning objects

let obj = {a: 'a', b: 'b', c: 'c'};
let cloneObj = Object.assign({}, obj);
let clone2 = {...obj};

obj.c = 'd';

console.log(obj);
console.log(cloneObj);
console.log(clone2);

// shallow clone

let anotherObject = {h: 'e', y: 'y', a: {deep: 'try and copy me'}};
let cloneAnotherObject = Object.assign({}, anotherObject);
let cloneAnotherObject2 = {...anotherObject};
let superClone = JSON.parse(JSON.stringify(anotherObject));

anotherObject.a.deep = 'trying to change';

console.log(anotherObject);
console.log(cloneAnotherObject);
console.log(cloneAnotherObject2);
console.log(superClone);
