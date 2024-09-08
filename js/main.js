// Registrar libros

// function registrarLibros() {
//     let libros = [];
//     let continuar = true;

//     while (continuar === true) {
//         const titulo = prompt("¿Cuál es el nombre del libro?");
//         const autor = prompt("¿Cuál es el nombre del autor?");
//         let genero
//         do {
//             genero = prompt("¿A cuál género pertenece el libro?\n - Fantasía\n - Poesía\n - No ficción").toLowerCase();
//         } while (genero != "fantasía" && genero != "poesía" && genero != "no ficción");
//         let idioma 
//         do {
//             idioma = prompt("¿En qué idioma está escrito el libro?\n - Español\n - Inglés").toLowerCase();
//         } while (idioma != "español" && idioma != "inglés");

//         libros.push({titulo: titulo, autor: autor, genero: genero, idioma: idioma});

//         const otroLibro = prompt("¿Quieres agregar otro libro? Si/No").toLowerCase();
//         if (otroLibro === "si") {
//             continuar = true;    
//         } else {
//             continuar = false;
//         }
//     }

//     return libros;
// }
// let librosRegistrados = registrarLibros();
// console.log(librosRegistrados);

const librosRegistrados = [
    {
        titulo: "Una semana en Lugano",
        autor: "Francisco Hinojosa",
        genero: "fantasía",
        idioma: "español"
    },
    {
        titulo: "Harry Potter",
        autor: "JK",
        genero: "fantasía",
        idioma: "inglés"
    },
    {
        titulo: "Civilizada",
        autor: "Iveth Luna",
        genero: "poesía",
        idioma: "español"
    },
    {
        titulo: "blood and ash",
        autor: "Jennifer",
        genero: "fantasía",
        idioma: "inglés"
    },
]


// Mostrar cuantos, y cuales, libros se registraron
console.log(`Ingresaste un total de ${librosRegistrados.length} libros`);
console.table(librosRegistrados);


// Mostrar cuantos libros hay por género
function titulosPorGenero(librosRegistrados){
    let fantasia = [];
    let poesia = [];
    let noFiccion = [];

    librosRegistrados.forEach((librosRegistrados) => {
        if (librosRegistrados.genero === "fantasía") {
            fantasia.push(librosRegistrados.titulo);
        } else if (librosRegistrados.genero === "poesía") {
            poesia.push(librosRegistrados.titulo);
        } else {
            noFiccion.push(librosRegistrados.titulo);
        }
    });

    console.log("%c---LIBROS DE ACUERDO AL GÉNERO---", "color:orange");
    console.log(`Tienes ${fantasia.length} libros de fantasía:`);
    console.log(fantasia);
    console.log(`Tienes ${poesia.length} libros de poesía:`);
    console.log(poesia);
    console.log(`Tienes ${noFiccion.length} libros de no ficción:`);
    console.log(noFiccion);
}

titulosPorGenero(librosRegistrados);


// Mostrar cuantos libros por idioma
function titulosPorIdioma(librosRegistrados){
    let espaniol = [];
    let ingles = [];

    librosRegistrados.forEach((librosRegistrados) => {
        if (librosRegistrados.idioma === "español") {
            espaniol.push(librosRegistrados.titulo);
        } else {
            ingles.push(librosRegistrados.titulo);
        }
    });

    console.log("%c---LIBROS DE ACUERDO AL IDIOMA---", "color:blue");
    console.log(`Tienes ${espaniol.length} libros en español:`);
    console.log(espaniol);
    console.log(`Tienes ${ingles.length} libros en inglés:`);
    console.log(ingles);
}

titulosPorIdioma(librosRegistrados);

