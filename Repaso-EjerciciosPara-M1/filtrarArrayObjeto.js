//Creamos el array con objetos dentro

var articulos = [

    {
        nombre: "Bici",
        costo: 3000
    }, {
        nombre: "Tv",
        costo: 2500
    },
    {
        nombre: "Libro",
        costo: 320
    }, {
        nombre: "Celular",
        costo: 10000
    },
    {
        nombre: "Laptop",
        costo: 20000
    }, {
        nombre: "Teclado",
        costo: 500
    },
    {
        nombre: "Audifonos",
        costo: 1700
    }

];


/**************/ // filtra el array

var articulosFiltrados = articulos.filter(function (articulo) {
    return articulo.costo <= 500
});

console.log(articulosFiltrados);
/*Regresa : 0: {nombre: 'Libro', costo: 320}
    1: {nombre: 'Teclado', costo: 500}*/



/***************/ //metodo de map

var nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre
});

//Regresa :  ['Bici', 'Tv', 'Libro', 'Celular', 'Laptop', 'Teclado', 'Audifonos']


/*****************/ // Buscar algo dentro del arreglo

var encuentraArticulo = articulos.find(function (articulo) {
    return articulo.nombre === "Laptop"
});

//Regresa : {nombre: 'Laptop', costo: 20000}

/***************/ // for each, sirve para recorrer el arreglo

articulos.forEach(function (articulo) {
    console.log(articulo.nombre)
});


/*************/ //Some, solo devuelve un boolean como respuesta ya que solo valida si existe o no.

var articulosBaratos = articulos.some(function (articulo) {
    return articulo.costo <= 700;
});

//Regresa : True


/************/ // Eliminar elementos de Array

/*
Agregar al final= .push()
Eliminar al final= .pop()

Agregar al inicio= .unshift()
Eliminar al inicio= .shift()

*/

/*
Tambien podemos utilizar splice tanto para eliminar como para sustituir, ejemplo:

    // Nomenclatura :   objeto.splice(posicion de inicio, numero de elementos a  eliminar/modificar, (en caso de modificar se agrega el elemento que quedara "elemento"))



*/

var articulos = ['carro', 'celular', 'moto', 'tv', 'libro']; //eliminar moto

articulos.splice(2, 1);


// Regresa : ['carro', 'celular', 'tv', 'libro']

var articulos = ['carro', 'celular', 'moto', 'tv', 'libro']; //modificar moto

articulos.splice(2, 1, 'laptop');

// Regresa : ['carro', 'celular', 'laptop', 'tv', 'libro']