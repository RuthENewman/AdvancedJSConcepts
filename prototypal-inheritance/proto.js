const obj = { name: "Faith "};

obj.hasOwnProperty('name'); // false

function a() {

}

a.hasOwnProperty('call'); // false

a.hasOwnProperty('bind'); // false

a.hasOwnProperty('apply'); // false

a.hasOwnProperty('name'); // true

function multiplyByFive(num) {
    return num*5;
}

multiplyByFive.__proto__ === Function.prototype; // true