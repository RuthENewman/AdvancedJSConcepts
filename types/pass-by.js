var a = 17;
var b = a;

b++;

console.log(a);
console.log(b);

let obj1 = { name: 'Andy', password: 'password123' };
let obj2 = obj1;

obj2.password = 'newpassword456';

console.log(obj1);
console.log(obj2);