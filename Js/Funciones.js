function sumarNumeros() {
    let resultado = sumar(3, 4);
    console.log("La suma de 3 + 4 es ", resultado);
}

function sumar(a, b) {
    return a + b;
}

function saludarNombre() {
    let nombre = prompt("Introduce tu nombre: ");
    saludar(nombre);
}

function saludar(nombre) {
    console.log("Hola, " + nombre + ", gusto en conocerte");
}

function calcularArea() {
    let radio = prompt("Introduce el radio del círculo, lo calcularé: ");
    let area = areaCirculo(radio);
    console.log("El área de tu círculo de radio " + radio + ", es:", area);
}

function areaCirculo(radio) {
    return Math.PI * radio * radio;
}

function mostrarMayor() {
    let num1 = prompt("Introduce el primer número:");
    let num2 = prompt("Introduce el segundo número:");
    console.log("El mayor entre " + num1 + " y " + num2 + " es:", mayor(num1, num2));
}

function mayor(a, b) {
    return a > b ? a : b;
}

function verificarPar() {
    let numero = prompt("Introduce un número:");
    console.log(numero + " es par:", esPar(numero));
}

function esPar(numero) {
    return numero % 2 === 0;
}

function calcularPromedio() {
    let array = [1, 2, 3, 4, 5];
    console.log("El promedio es:", promedio(array));
}

function promedio(array) {
    let suma = array.reduce((a, b) => a + b, 0);
    return suma / array.length;
}
