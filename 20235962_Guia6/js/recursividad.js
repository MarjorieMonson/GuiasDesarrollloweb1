// Otra forma de acceder a un elemento HTML es utilizando el getElementById del DOM
// Notesé que para este caso no se antepone el carácter #
const campo = document.getElementById("idTxtNumero");

// Definimos una función anónima que permite validar en tiempo real el ingreso de un número
const validarNumero = function (e) {
    // Creamos una expresión regular que valida que sean números
    let validar = /^[0-9]$/; // Ajustado para permitir un solo dígito

    // Obtenemos la tecla presionada
    let tecla = e.key;

    // Verificamos si la expresión regular coincide con el valor ingresado
    // Si no coincide, prevenimos la acción predeterminada
    if (!validar.test(tecla)) e.preventDefault();
};

// Definiendo el evento keypress para el campo
campo.addEventListener("keypress", validarNumero);

// Trabajando con el botón Calcular
const boton = document.getElementById("idBtnCalcular");

// Definiendo una función anónima para calcular el factorial de un número
function calcularFactorial(numero) {
    return numero < 2 ? 1 : numero * calcularFactorial(numero - 1);
}

// Definamos una función de tipo flecha para imprimir el resultado del factorial
const imprimir = (numero, resultado) => {
    const contenedor = document.getElementById("idDivResultado");
    contenedor.innerHTML = `El factorial de ${numero}! es ${resultado}`;
};

// Definiendo una función tradicional para calcular el factorial
function calcular() {
    let numero = parseInt(document.getElementById("idTxtNumero").value);
    
    if (!isNaN(numero) && numero >= 0) {
        // Llamamos a la función para que calcule el factorial
        let resultado = calcularFactorial(numero);
        // Enviando el resultado a la función de tipo flecha
        imprimir(numero, resultado);
    } else {
        alert("Debe ingresar un número válido.");
    }
}

// Definiendo el evento click para el botón
boton.addEventListener("click", calcular);
