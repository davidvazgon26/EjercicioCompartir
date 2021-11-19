// crear un objeto

var miAuto = {
    marca: "Toyota",
    modelo: "Corola",
    anio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.anio}`);
    }
};

// this es una palabra clave que hace referencia al mismo objeto.

// acceder a algo especifico

miAuto.marca;
miAuto.detalleDelAuto();