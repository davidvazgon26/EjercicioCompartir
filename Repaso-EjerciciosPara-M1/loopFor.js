// version con for normal

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`); // cuidado con el tipo de comillas
}

for (let i = 0; i < estudiantes.length; i++) {

    saludarEstudiantes(estudiantes[i]);

}


// version con for para arreglos

for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}