let libros = JSON.parse(localStorage.getItem("libros")) || [];

const form = document.querySelector("#form");
const listadoVacio = document.querySelector("#listado-vacio");
const listadoLibros = document.querySelector("#listado-libros");

crearTabla();

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
});

// Crear tabla de libros
function crearTabla() {
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
    crearTabla();
};