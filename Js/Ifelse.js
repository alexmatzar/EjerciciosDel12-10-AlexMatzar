function verificarTemperatura() {
    const temperatura = document.getElementById('temperatura').value;

    if (temperatura < 20) {
        alert("Hace frío.");
    } else {
        alert("Hace calor.");
    }
}

function verificarEdad() {
    const edad = document.getElementById('edad').value;

    if (edad >= 18) {
        alert("Eres mayor de edad.");
    } else {
        alert("Eres menor de edad.");
    }
}

function verificarParidad() {
    const numero = document.getElementById('numero1').value;

    if (numero % 2 === 0) {
        alert("El número es par.");
    } else {
        alert("El número es impar.");
    }
}

function verificarCalificacion() {
    const calificacion = document.getElementById('calificacion').value;

    if (calificacion >= 60) {
        alert("Has aprobado.");
    } else {
        alert("Has reprobado.");
    }
}

function verificarSigno() {
    const numero = document.getElementById('numero2').value;

    if (numero > 0) {
        alert("El número es positivo.");
    } else if (numero < 0) {
        alert("El número es negativo.");
    } else {
        alert("El número es cero.");
    }
}
