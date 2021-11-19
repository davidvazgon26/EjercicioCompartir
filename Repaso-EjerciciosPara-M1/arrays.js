//generar un array

var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);

// longitud o cuantos elementos tiene un array

console.log(frutas.length);

// Mostrar solo un elemento del array

console.log(frutas[2]); //Cereza


// agregar elementos al array (al final del array)
// Si no se desea no es necesaria la variable, puedes usar directamente push

var masFrutas = frutas.push("Uvas");

// Quitar elemento del array (utimo elemento en el array)
// el guardarlo en la variable es para conservar el dato ya que de no ser asi se elimina del array y se pierde//


var ultimo = frutas.pop("Uvas");

// agregar un elemento al array pero al inicio del mismo

var nuevaLongitud = frutas.unshift("Uvas");

// eliminar el elemento del inicio del array

var borrarFruta = frutas.shift();

// saber la posicion de algun elemento 

var posicion = frutas.indexOf("Cereza");

posicion

