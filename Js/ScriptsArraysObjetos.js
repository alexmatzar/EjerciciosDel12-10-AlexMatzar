const personas = [
    { nombre: 'Alex', edad: 25 },
    { nombre: 'Gerson', edad: 30 },
    { nombre: 'Tuliux', edad: 22 }
];

function mostrarNombresPersonas() {
    personas.forEach(persona => {
        console.log('Nombre: ' + persona.nombre);
    });
}

const coches = [
    { marca: 'Toyota', modelo: 'Hilux' },
    { marca: 'Honda', modelo: 'Type R' },
    { marca: 'Ford', modelo: 'Mustang' },
    { marca: 'Chevrolet', modelo: 'Silverado' },
    { marca: 'Tesla', modelo: 'Model 3' }
];

function mostrarModelosCoches() {
    coches.forEach(coche => {
        console.log('Modelo: ' + coche.modelo);
    });
}

const productos = [
    { nombre: 'Laptop', precio: 150 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Monitor', precio: 200 },
    { nombre: 'Mouse', precio: 30 },
    { nombre: 'Auriculares', precio: 120 }
];

function mostrarProductosCaros() {
    productos.forEach(producto => {
        if (producto.precio > 100) {
            console.log('Producto: ' + producto.nombre + ', Precio: ' + producto.precio);
        }
    });
}

const alumnos = [
    { nombre: 'Claudia', nota: 75 },
    { nombre: 'Gerson', nota: 45 },
    { nombre: 'Cristian', nota: 60 },
    { nombre: 'Josías', nota: 80 },
    { nombre: 'Zulema', nota: 55 }
];

function mostrarAlumnosAprobados() {
    alumnos.forEach(alumno => {
        if (alumno.nota >= 60) {
            console.log('Alumno: ' + alumno.nombre + ', Nota: ' + alumno.nota);
        }
    });
}

const libros = [
    { titulo: 'Una vuelta por el mudno', autor: 'Julio Verné' },
    { titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes' },
    { titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón' },
    { titulo: 'El principito', autor: 'Antoine de Saint-Exupéry' }
];

function mostrarTitulosLibros() {
    libros.forEach(libro => {
        console.log('Título: ' + libro.titulo);
    });
}

const peliculas = [
    { titulo: 'Rápidos y furiosos X', director: 'Universal Studios', año: 2020 },
    { titulo: 'La Rosa de Guadalupe', director: 'Televisa xd', año: 2005 },
    { titulo: 'Interestelar', director: 'Quentin Tarantino', año: 1994 },
    { titulo: 'El Padrino', director: 'Cristofer Nolan', año: 2014 }
];

function mostrarDescripcionesPeliculas() {
    peliculas.forEach(pelicula => {
        console.log(`Película: ${pelicula.titulo}, Director: ${pelicula.director}, Año: ${pelicula.año}`);
    });
}
