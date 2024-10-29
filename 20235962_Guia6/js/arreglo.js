// Accedemos a los contenedores donde se mostrarán los arreglos
const containerArreglo = document.querySelector("#idContainerArreglo");
const containerArregloOrdenado = document.querySelector("#idContainerArregloOrdenado");

// Accedemos a cada botón por medio de la API DOM
const btnAgregar = document.querySelector("#idBtnAgregar");
const btnOrdenar = document.querySelector("#idBtnOrdenar");

// Agregamos el evento click a los botones y les asignamos las funciones que realizarán las operaciones
btnAgregar.addEventListener("click", agregarElemento);
btnOrdenar.addEventListener("click", ordenarElementos);

let arreglo = [];

// Función para agregar un elemento al arreglo
function agregarElemento() {
  const numero = parseInt(document.querySelector("#inputNumero").value);
  // Verificando que sea un número
  if (isNaN(numero)) {
    alert("Debe ingresar un número válido");
  } else {
    // Agregamos un nuevo elemento al arreglo
    arreglo.push(numero);

    // Creamos un elemento <div> y un <h3> para mostrar el número en el contenedor
    let caja = document.createElement("div");
    caja.className = "col-md-1 colum bg-light border m-1 p-2 text-center";
    let valor = document.createElement("h3");
    valor.textContent = numero;
    valor.className = "text-primary"; // Coloca el color de texto primario
    caja.appendChild(valor);

    // Insertamos los nuevos elementos en el contenedor
    containerArreglo.appendChild(caja);
  }
}

// Función para ordenar y mostrar el arreglo ordenado
function ordenarElementos() {
  // Limpiamos el contenedor de elementos ordenados antes de agregar los nuevos
  containerArregloOrdenado.innerHTML = "<h3>Arreglo ordenado</h3>";

  // Ordenamos el arreglo y recorremos sus elementos
  for (let i of arreglo.sort((a, b) => a - b)) {
    let caja = document.createElement("div");
    caja.className = "col-md-1 colum bg-light border m-1 p-2 text-center";
    let valor = document.createElement("h3");
    valor.textContent = i;
    valor.className = "text-success"; // Coloca el color de texto secundario para el arreglo ordenado
    caja.appendChild(valor);

    // Insertamos los elementos ordenados en el contenedor
    containerArregloOrdenado.appendChild(caja);
  }
}
