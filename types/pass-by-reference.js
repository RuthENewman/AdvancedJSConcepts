const number = 100
const string = "Laura"
let obj1 = {
  value: "a"
}
let obj2 = {
  value: "b"
}
let obj3 = obj2;
 
function change(number, string, obj1, obj2) {
    number = number * 10;
    string = "Peter";
    obj1 = obj2;
    obj2.value = "c";
}
 
change(number, string, obj1, obj2);
 
console.log(number); // returns 100
console.log(string); // returns Laura
console.log(obj1.value); // returns a