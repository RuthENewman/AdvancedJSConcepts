var user1 = {name : "Lily", org: "dev" };
var user2 = {name: "Lily", org: "dev"};
var eq = (user1 == user2);
alert(eq); // gives false
var altEq = JSON.stringify(user1) === JSON.stringify(user2);
alert(altEq); // gives true

console.log(eq);
console.log(altEq);