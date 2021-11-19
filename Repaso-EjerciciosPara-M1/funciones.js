// hay 2 tipos de funciones: declarativas y Expresiva. Ejemplos:   "Se puede usar antes de declararla"


// Funcion Declarativas

function miFunction() {
    return 3;
}

//llamada a la funcion

miFuncion();

/********************************/

//Funcion como Expresion o Expresiva "ojo, tambien se conocen como funciones anonimas, porque no tiene nombre la funcion, solo la variable"
//ojo se declara y luego se usa.

var miFuncion = function (a, b) {
    return a + b;
}

//llamada a la funcion

miFuncion(5, 4);

// ojo que la funcion y la variable tengan el mismo nombre no indica que esten relacionadas entre si, 
//una es independiente de la otra, solo comparten el mismo nombre



/*********************************************/

//Ejemplos de funciones:

function saludarEstudiantes(estudiante) {
    console.log('Hola ${estudiante}');

}
saludarEstudiantes("David");


function SUMA(a, b) {

    var resultado = a + b;

    return resultado;
}

SUMA(2, 3);

// Ejemplo del Scope Global y Local

var miNombre = "David";

function nombre() {

var miApellido = "Vazquez";
console.log(miNombre+" "+miApellido);

}

nombre();
miNombre;  //scope Global
miApellido; //scope local
//
