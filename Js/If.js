function esMayorQue10() {
    const numero = document.getElementById('numero1').value;

    if (numero > 10) {
        alert("Tu número es mayor que 10.");
    }
    if (numero <= 10) {
        alert("Tu número no es mayor que 10.");
    }
}

function esMayorDe18() {
    const edad = document.getElementById('edad').value;

    if (edad >= 18) {
        alert("Eres mayor de 18 años.");
    }
    if (edad < 18) {
        alert("No eres mayor de 18 años, niñato.");
    }
}

// Ejercicio 3: Verificar si la calificación es mayor a 50
function esAprobado() {
    const calificacion = document.getElementById('calificacion').value;

    if (calificacion > 50) {
        alert("Aprobado.");
    }
    if (calificacion <= 50) {
        alert("Reprobado.");
    }
}

// Ejercicio 4: Verificar si el número es positivo
function esPositivo() {
    const numero = document.getElementById('numero2').value;

    if (numero >= 0) {
        alert("Tu número es positivo.");
    }
    if (numero < 0) {
        alert("Tu número es negativo.");
    }
}

// Ejercicio 5: Verificar cuál de los dos números es mayor
function esMayor() {
    const numero1 = document.getElementById('numero3').value;
    const numero2 = document.getElementById('numero4').value;

    if (numero1 > numero2) {
        alert("El primer número es mayor.");
    }
    if (numero2 > numero1) {
        alert("El segundo número es mayor.");
    }
    if (numero1 == numero2) {
        alert("Ambos números son iguales.");
    }
}
