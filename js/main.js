// Registrar libros
function registrarLibros() {
    let libros = [];
    let continuar = true;

    while (continuar === true) {
        const titulo = prompt("Nombre del libro");
        const autor = prompt("Nombre del autor");
        const zona = prompt("Ingresa en cual ubicación te encuentras");

        libros.push({titulo: titulo, autor: autor, zona: zona});

        const otroLibro = prompt("¿Quieres agregar otro libro? Si/No").toLowerCase();
        if (otroLibro === "si") {
            continuar = true;    
        } else {
            continuar = false;
        }
    }

    return libros;
}
let librosRegistrados = registrarLibros();
console.log(librosRegistrados);

// Mostrar cuantos libros se registraron
console.log("Ingresaste " + librosRegistrados.length + " libros.")

// Mostrar cuantos libros hay por zona


// Mostrar cuantos libros por propietario


