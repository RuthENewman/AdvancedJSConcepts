1 == "1" // 1 == 1
1 === "1" // false
-0 === +0 // true 
Object.is(-0,+0); // false

if (1) {
    console.log(5);
}
if (0) {
    console.log(6);
}

var jan = (false == "") 
console.log('jan', jan); // true

var feb = (false == []); 
console.log('feb', feb); // true

var march = (false == {}); 
console.log('march', march); // false

var april = ("" == 0);
console.log('april', april); // true

var may = ("" == []);
console.log('may', may); // true    

var june = ("" == {}); 
console.log('june', june); // false

var july = (0 == []);
console.log('july', july); // true

var aug = (0 == {});
console.log('aug', aug); // false 

var sept = (0 == null);  
console.log('sept', sept); // false