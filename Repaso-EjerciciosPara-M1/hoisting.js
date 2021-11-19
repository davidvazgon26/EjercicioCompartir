//hoisting es cuando las variables y las funciones se procesan antes de que se ejecute cualquier tipo de codigo


var miNombre;  // se declara

miNombre = "David"  // Se inicializa


//ejemplo de hoisting

console.log(miNombre2);

var miNombre="David2";

//es cuando llamas antes de declarar e inicializar

// Sale Undefined


//hoisting con funciones (tambien pasa)

hey();

function hey(){
    console.log("Hola "+ miNombre);
}

var miNombre = "David"

// Entrega Hola undefined

/********************/





