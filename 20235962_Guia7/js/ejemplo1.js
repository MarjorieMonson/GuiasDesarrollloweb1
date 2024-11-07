// Referencias a elementos del formulario y botones
const newForm = document.getElementById("idNewForm");
const buttonCrear = document.getElementById("idBtnCrear");
const buttonAddElemento = document.getElementById("idBtnAddElement");
const cmbElemento = document.getElementById("idCmbElemento");
const tituloElemento = document.getElementById("idTituloElemento");
const nombreElemento = document.getElementById("idNombreElemento");
const elementCounter = document.getElementById("idElementCounter"); // Contador de elementos

// Modal de Bootstrap
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});

// Función para verificar el tipo de elemento seleccionado en el modal
const verificarTipoElemento = function () {
    const elemento = cmbElemento.value;
    if (elemento !== "") {
        modal.show(); // Muestra el modal si el tipo está seleccionado
    } else {
        alert("Debe seleccionar el elemento que se creará");
    }
};

// Función para verificar si el ID ya existe
const verificarIdUnico = function (id) {
    return !document.getElementById(`id${id}`);
};

// Función para actualizar el contador de elementos
const actualizarContador = function () {
    const totalElements = newForm.children.length / 2; // Considera que cada elemento tiene un label y un input
    elementCounter.textContent = `Total de elementos: ${totalElements}`;
};

// Función para crear un elemento select dinámico
const newSelect = function () {
    if (!verificarIdUnico(nombreElemento.value)) {
        alert("El ID ya existe. Ingrese un ID único.");
        return;
    }

    const addElemento = document.createElement("select");
    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    addElemento.setAttribute("class", "form-select");

    for (let i = 1; i <= 10; i++) {
        const addOption = document.createElement("option");
        addOption.value = i;
        addOption.innerHTML = `Opción ${i}`;
        addElemento.appendChild(addOption);
    }

    const labelElemento = document.createElement("label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`);
    labelElemento.textContent = tituloElemento.value;

    const labelId = document.createElement("span");
    labelId.textContent = `ID de control: ${nombreElemento.value}`;

    const divElemento = document.createElement("div");
    divElemento.setAttribute("class", "form-floating");

    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);

    newForm.appendChild(labelId);
    newForm.appendChild(divElemento);
    actualizarContador();
};

// Función para crear un radio o checkbox dinámico
const newRadioCheckbox = function (newElemento) {
    if (!verificarIdUnico(nombreElemento.value)) {
        alert("El ID ya existe. Ingrese un ID único.");
        return;
    }

    const addElemento = document.createElement("input");
    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    addElemento.setAttribute("type", newElemento);
    addElemento.setAttribute("class", "form-check-input");

    const labelElemento = document.createElement("label");
    labelElemento.setAttribute("class", "form-check-label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`);
    labelElemento.textContent = tituloElemento.value;

    const labelId = document.createElement("span");
    labelId.textContent = `ID de control: ${nombreElemento.value}`;

    const divElemento = document.createElement("div");
    divElemento.setAttribute("class", "form-check");

    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);

    newForm.appendChild(labelId);
    newForm.appendChild(divElemento);
    actualizarContador();
};

// Función para crear inputs dinámicos de texto, número, date, password, y textarea
const newInput = function (newElemento) {
    if (!verificarIdUnico(nombreElemento.value)) {
        alert("El ID ya existe. Ingrese un ID único.");
        return;
    }

    const addElemento = newElemento === "textarea" ? document.createElement("textarea") : document.createElement("input");
    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    if (newElemento !== "textarea") addElemento.setAttribute("type", newElemento);
    addElemento.setAttribute("class", "form-control");
    addElemento.setAttribute("placeholder", tituloElemento.value);

    const labelElemento = document.createElement("label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`);

    const iconLabel = document.createElement("i");
    iconLabel.setAttribute("class", "bi bi-tag");
    labelElemento.textContent = tituloElemento.value;
    labelElemento.insertAdjacentElement("afterbegin", iconLabel);

    const labelId = document.createElement("span");
    labelId.textContent = `ID de control: ${nombreElemento.value}`;

    const divElemento = document.createElement("div");
    divElemento.setAttribute("class", "form-floating mb-3");

    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);

    newForm.appendChild(labelId);
    newForm.appendChild(divElemento);
    actualizarContador();
};

// Eventos de los botones
buttonCrear.onclick = () => {
    verificarTipoElemento();
};

buttonAddElemento.onclick = () => {
    if (nombreElemento.value !== "" && tituloElemento.value !== "") {
        const elemento = cmbElemento.value;
        if (elemento === "select") {
            newSelect();
        } else if (elemento === "radio" || elemento === "checkbox") {
            newRadioCheckbox(elemento);
        } else {
            newInput(elemento);
        }
    } else {
        alert("Faltan campos por completar");
    }
};

// Función para limpiar todos los elementos del formulario
const limpiarFormulario = function () {
    newForm.innerHTML = ""; // Elimina todos los elementos hijos
    actualizarContador();   // Resetea el contador de elementos
};

// Evento para limpiar campos y enfocar en el modal
document.getElementById("idModal").addEventListener("shown.bs.modal", () => {
    tituloElemento.value = "";
    nombreElemento.value = "";
    tituloElemento.focus();
});

// Llama a la función limpiarFormulario() según sea necesario
document.getElementById("idBtnLimpiar").onclick = limpiarFormulario;
