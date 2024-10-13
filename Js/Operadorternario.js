function verificarEdad() {
    let edad = parseInt(document.getElementById('edad').value);
    let mensaje = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
    alert(mensaje);
}

function verificarParImpar() {
    let numero = parseInt(document.getElementById('numero').value);
    let mensaje = (numero % 2 === 0) ? "Par" : "Impar";
    alert(mensaje);
}

function verificarMayor() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let mensaje = (num1 > num2) ? `${num1} es mayor` : `${num2} es mayor`;
    alert(mensaje);
}

function verificarTemperatura() {
    let temperatura = parseInt(document.getElementById('temperatura').value);
    let mensaje = (temperatura >= 20) ? "Calor" : "Frío";
    alert(mensaje);
}

function verificarVoto() {
    let nacimiento = parseInt(document.getElementById('nacimiento').value);
    let edad = new Date().getFullYear() - nacimiento;
    let mensaje = (edad >= 18) ? "Puede votar" : "No puede votar";
    alert(mensaje);
}