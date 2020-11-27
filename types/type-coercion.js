1 == "1" // 1 == 1

var jan = (false == "") 
console.log('jan', jan); // true

var feb = (false == []); 
console.log('feb', feb);

var march = (false == {}); //
console.log('march', march);

var april = ("" == 0);
console.log('april', april);     
var may = ("" == []);
console.log('may', may);     

var june = ("" == {}) //
console.log('june', june);

var july = (0 == []) // false
console.log('july', july);

var aug = (0 == {}) 
// false 
console.log('aug', aug); 

var sept = (0 == null)  
// false
console.log('sept', sept);