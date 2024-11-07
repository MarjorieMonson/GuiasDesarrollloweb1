// ACCEDIENDO A LA REFERENCIA DEL FORMULARIO QUE TENDRÁ LOS NUEVOS ELEMENTOS
const newForm = document.getElementById("idNewForm");

// ACCEDIENDO A LA REFERENCIA DE BOTONES
const buttonCrear = document.getElementById("idBtnCrear");
const buttonAddElemento = document.getElementById("idBtnAddElement");

// ACCEDIENDO AL VALOR DEL SELECT PARA DETERMINAR EL TIPO DE ELEMENTO A CREAR
const cmbElemento = document.getElementById("idCmbElemento");

// ACCEDIENDO A LOS CONTROLES DEL MODAL
const tituloElemento = document.getElementById("idTituloElemento");
const nombreElemento = document.getElementById("idNombreElemento");

// CREANDO MODAL CON BOOTSTRAP
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});

// AGREGANDO FUNCIONES
const verificarTipoElemento = function () {
    let elemento = cmbElemento.value;
    // Validando que se haya seleccionado un elemento
    if (elemento != "") {
        modal.show(); // Método perteneciente al modal de Bootstrap
    } else {
        alert("Debe seleccionar el elemento que se creará");
    }
};

const newSelect = function () {
    // Creando elementos
    let addElemento = document.createElement("select");
    // Creando atributos para el nuevo elemento
    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    addElemento.setAttribute("class", "form-select");

    // Creando opciones para el select
    for (let i = 1; i <= 10; i++) {
        let addOption = document.createElement("option");
        addOption.value = i;
        addOption.innerHTML = `Opción ${i}`;
        addElemento.appendChild(addOption);
    }

    // Creando label para el nuevo control
    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`);
    labelElemento.textContent = tituloElemento.value;

    // Creando label de ID
    let labelId = document.createElement("span");
    labelId.textContent = `ID de control: ${nombreElemento.value}`;

    // Creando plantilla de Bootstrap para visualizar el nuevo elemento
    let divElemento = document.createElement("div");
    divElemento.setAttribute("class", "form-floating");

    // Agregando el select y label al div
    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);

    // Agregando el ID y el div al formulario
    newForm.appendChild(labelId);
    newForm.appendChild(divElemento);
};

const newRadioCheckbox = function (newElemento) {
    // Creando elemento input de tipo radio o checkbox
    let addElemento = document.createElement("input");
    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    addElemento.setAttribute("type", newElemento);
    addElemento.setAttribute("class", "form-check-input");

    // Creando label para el nuevo control
    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("class", "form-check-label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`);
    labelElemento.textContent = tituloElemento.value;

    // Creando label de ID
    let labelId = document.createElement("span");
    labelId.textContent = `ID de control: ${nombreElemento.value}`;

    // Creando plantilla de Bootstrap para visualizar el nuevo elemento
    let divElemento = document.createElement("div");
    divElemento.setAttribute("class", "form-check");

    // Agregando el input y label al div
    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);

    // Agregando el ID y el div al formulario
    newForm.appendChild(labelId);
    newForm.appendChild(divElemento);
};

const newInput = function (newElemento) {
    // Creando elemento de tipo text, number, date o password
    let addElemento = newElemento == "textarea" ? document.createElement("textarea") : document.createElement("input");
    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    addElemento.setAttribute("type", newElemento);
    addElemento.setAttribute("class", "form-control");
    addElemento.setAttribute("placeholder", tituloElemento.value);

    // Creando label para el nuevo control
    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`);
    
    // Creando ícono para el label
    let iconLabel = document.createElement("i");
    iconLabel.setAttribute("class", "bi bi-tag");

    // Insertando el ícono antes del texto del label
    labelElemento.insertAdjacentElement("afterbegin", iconLabel);
    labelElemento.textContent = tituloElemento.value;

    // Creando label de ID
    let labelId = document.createElement("span");
    labelId.textContent = `ID de control: ${nombreElemento.value}`;

    // Creando plantilla de Bootstrap para visualizar el nuevo elemento
    let divElemento = document.createElement("div");
    divElemento.setAttribute("class", "form-floating mb-3");

    // Agregando el input y label al div
    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);

    // Agregando el ID y el div al formulario
    newForm.appendChild(labelId);
    newForm.appendChild(divElemento);
};

// AGREGANDO EVENTO CLIC A LOS BOTONES
buttonCrear.onclick = () => {
    verificarTipoElemento();
};

buttonAddElemento.onclick = () => {
    if (nombreElemento.value != "" && tituloElemento.value != "") {
        let elemento = cmbElemento.value;
        
        if (elemento == "select") {
            newSelect();
        } else if (elemento == "radio" || elemento == "checkbox") {
            newRadioCheckbox(elemento);
        } else {
            newInput(elemento);
        }
    } else {
        alert("Faltan campos por completar");
    }
};

// Agregando evento para el modal de Bootstrap
document.getElementById("idModal").addEventListener("shown.bs.modal", () => {
    // Limpiando campos para los nuevos elementos
    tituloElemento.value = "";
    nombreElemento.value = "";
    // Inicializando puntero en el campo del título para el control
    tituloElemento.focus();
});
