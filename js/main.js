let libros = JSON.parse(localStorage.getItem("libros")) || [];

const form = document.querySelector("#form");
const listadoVacio = document.querySelector("#listado-vacio");
const listadoLibros = document.querySelector("#listado-libros");
const listadoAutores = document.querySelector("#listado-autores");

crearTablaLibros();
crearTablaAutores()

// Registrar libros
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let titulo = document.querySelector("#titulo").value;
    let autor = document.querySelector("#autor").value;
    let genero = document.querySelector('input[name="genero"]:checked').value;
    let idioma = document.querySelector('input[name="idioma"]:checked').value;

    let nuevoLibro = {
        titulo,
        autor,
        genero,
        idioma
    };

    agregarLibro(nuevoLibro);

    form.reset();

    Swal.fire({
        title: "¡Listo!",
        text: "Tu libro quedó guardado :)",
        imageUrl: "/carpi_js59970/img/logo.png",
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "Logo de libros"
    });
});

// Crear tabla de libros
function crearTablaLibros() {
    if (libros.length === 0) {
        listadoLibros.classList.add("d-none");
    } else {
        listadoVacio.classList.add("d-none");
        listadoLibros.innerHTML = '';
        let tabla = document.createElement("table");
        tabla.classList.add("tabla");
        tabla.innerHTML = `
            <thead class="tabla-titulo">
                <tr>
                    <th class="th">Título</th>
                    <th class="th">Autor</th>
                    <th class="th">Género Literario</th>
                    <th class="th">Idioma</th>
                </tr>
            </thead>
            <tbody class="tabla-contenido" id="tabla-contenido">
            </tbody>
        `;
        listadoLibros.append(tabla);
    
        const tablaContenido = document.querySelector("#tabla-contenido")





    
        libros.forEach((libro) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td class="td">${libro.titulo}</td>
            <td class="td">${libro.autor}</td>
            <td class="td">${libro.genero}</td>
            <td class="td">${libro.idioma}</td>
        `;
    
        tablaContenido.append(row);
        });
    }
};

//Agregar nuevo libro y actualizar tabla
function agregarLibro(nuevoLibro) {
    libros.push(nuevoLibro);
    localStorage.setItem("libros", JSON.stringify(libros));
    crearTablaLibros();
    crearTablaAutores();
};




// Crear tabla de autores
function crearTablaAutores() {

    listadoAutores.innerHTML = '';
    let tabla = document.createElement("table");
    tabla.classList.add("tabla");
    tabla.innerHTML = `
        <thead class="tabla-titulo">
            <tr>
                <th class="th">Nombre</th>
                <th class="th">Grupo</th>
                <th class="th">País</th>
                <th class="th">Nacionalidad</th>
            </tr>
        </thead>
        <tbody class="tabla-contenidoAutores" id="tabla-contenidoAutores">
        </tbody>
    `;
    listadoAutores.append(tabla);
    
    const tablaContenidoAutores = document.querySelector("#tabla-contenidoAutores")

    //Traer información de autores
    fetch("../data.json")
    .then((resp) => resp.json())
    .then((data) => {
        
        data.forEach(autor => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td class="td">${autor.nombre}</td>
                <td class="td">${autor.grupo}</td>
                <td class="td">${autor.pais}</td>
                <td class="td">${autor.nacimiento}</td>
            `;

            tablaContenidoAutores.append(row);
        });
    })
};