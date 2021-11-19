//Coercion implicita

var a = 4 +"7";
var b = 4*"7";
console.log(typeof a);
console.log(typeof b);

//Coercion Explicita

var a = 20;
var b = a+"";
var c = String(a);
var d = Number(c);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
