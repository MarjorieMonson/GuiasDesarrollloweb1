// Accedemos al contenedor donde se mostrará los estudiantes
const containerEstudiantes = document.querySelector("#idContainerEstudiantes");

// Accedemos a cada botón por medio de la API DOM
const btnPromedio = document.querySelector("#idBtnPromedio");

// Agregamos el evento click al botón y le asignamos la función que realizará la operación
btnPromedio.addEventListener("click", generarEstudiantes);

function generarEstudiantes() {
  // Usaremos un arreglo para guardar la información del estudiante
  let arrayEstudiante = [];
  
  let totalEstudiantes = parseInt(document.querySelector("#inputNumeroEstudiantes").value);
  let contador = 1;

  // Utilizamos un while para recorrer el total de estudiantes
  while (contador <= totalEstudiantes) {
    let estudiante = prompt(`Ingrese el nombre del estudiante ${contador}`);
    let calificacion, convertir;

    // Verificando que sea un valor válido y en el rango de 0 - 10
    do {
      calificacion = prompt(`Ingrese la calificación del estudiante ${contador}`);
      convertir = parseFloat(calificacion);
    } while (isNaN(convertir) || convertir < 0 || convertir > 10);

    // Asignando los valores al arreglo
    arrayEstudiante.push([estudiante, convertir]);
    contador++;
  }

  // Recorriendo el arreglo para calcular el promedio y la calificación más alta
  let calificacionAlta = 0;
  let promedio = 0;
  let posicion = null;

  let listado = "<h3>Listado de estudiantes registrados</h3>";
  listado += "<ol>";
  for (let [nombre, nota] of arrayEstudiante) {
    // Imprimiendo lista de estudiantes
    listado += `<li><b>Nombre:</b> ${nombre} - <b>Calificación:</b> ${nota}</li>`;

    // Verificación de calificación más alta
    if (nota > calificacionAlta) {
      calificacionAlta = nota;
      posicion = nombre;
    }

    // Calculando el promedio
    promedio += nota;
  }
  listado += "</ol>";

  promedio = (promedio / arrayEstudiante.length).toFixed(2);
  listado += `<p><b>Promedio de calificaciones:</b> ${promedio}</p>`;
  listado += `<p><b>Estudiante con mejor calificación:</b> ${posicion}</p>`;

  // Imprimiendo resultado
  containerEstudiantes.innerHTML = listado;
}
