function verificarCalificacion() {
    let calificacion = prompt("Introduce tu calificación, si es mayor a 60, ganaste:");
    if (calificacion >= 60) {
        console.log("Aprobado");
    } else {
        console.log("Reprobado");
    }
}

function verificarNumero() {
    let numero = prompt("Introduce un número para ver si es negativo o cero:");
    if (numero > 0) {
        console.log("El número es positivo");
    } else if (numero < 0) {
        console.log("El número es negativo");
    } else {
        console.log("El número es cero");
    }
}

function mostrarDiaSemana() {
    let dia = prompt("Introduce un número (1-7) y te diré el día de la semana:");
    switch (parseInt(dia)) {
        case 1: console.log("Lunes"); break;
        case 2: console.log("Martes"); break;
        case 3: console.log("Miércoles"); break;
        case 4: console.log("Jueves"); break;
        case 5: console.log("Viernes"); break;
        case 6: console.log("Sábado"); break;
        case 7: console.log("Domingo"); break;
        default: console.log("Número inválido");
    }
}

function verificarMayor() {
    let num1 = prompt("Introduce el primer número:");
    let num2 = prompt("Introduce el segundo número:");
    if (num1 > num2) {
        console.log(num1 + " es mayor que " + num2);
    } else if (num2 > num1) {
        console.log(num2 + " es mayor que " + num1);
    } else {
        console.log("Ambos números son iguales");
    }
}

function verificarEdad() {
    let edad = prompt("Introduce tu edad:");
    if (edad >= 18) {
        console.log("Eres mayor de edad");
    } else {
        console.log("Eres menor de edad");
    }
}

function verificarDivisibilidad() {
    let numero = prompt("Introduce un número:");
    if (numero % 5 === 0) {
        console.log(numero + " es divisible por 5");
    } else {
        console.log(numero + " no es divisible por 5");
    }
}
