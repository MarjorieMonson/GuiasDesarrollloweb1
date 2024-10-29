// Accediendo a los elementos HTML
const inputNombre = document.getElementById("idTxtNombre");
const inputApellido = document.getElementById("idTxtApellido");
const inputFechaNacimiento = document.getElementById("idTxtFechaNacimiento");
const inputSexoMasculino = document.getElementById("idRdMasculino");
const inputSexoFemenino = document.getElementById("idRdFemenino");
const selectPais = document.getElementById("idCmbPais");
const inputDireccion = document.getElementById("idTxtDireccion");
const btnAgregar = document.getElementById("idBtnAgregar");
const btnMostrar = document.getElementById("idBtnMostrar");
const btnLimpiar = document.getElementById("idBtnLimpiar");
const tablaPacientes = document.getElementById("idTablaPacientes");

let pacientes = []; // Arreglo para almacenar los pacientes
let indiceEdicion = -1; // Índice del paciente que se está editando

// Función para agregar o actualizar un paciente
const agregarOActualizarPaciente = () => {
    // Verificar si todos los campos están completos
    if (!inputNombre.value || !inputApellido.value || !inputFechaNacimiento.value || !selectPais.value || !inputDireccion.value || (!inputSexoMasculino.checked && !inputSexoFemenino.checked)) {
        mostrarNotificacion("Por favor, completa todos los campos.");
        return;
    }

    const paciente = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        fechaNacimiento: inputFechaNacimiento.value,
        sexo: inputSexoMasculino.checked ? "Masculino" : "Femenino",
        pais: selectPais.options[selectPais.selectedIndex].text,
        direccion: inputDireccion.value
    };

    if (indiceEdicion === -1) {
        pacientes.push(paciente);
        mostrarNotificacion("Paciente agregado exitosamente.");
    } else {
        pacientes[indiceEdicion] = paciente; // Actualizar el paciente existente
        mostrarNotificacion("Paciente actualizado exitosamente.");
        indiceEdicion = -1; // Resetear índice de edición
    }

    limpiarFormulario(); // Limpiar el formulario después de agregar o actualizar
};

// Función para mostrar los pacientes en la tabla
const mostrarPacientes = () => {
    if (pacientes.length === 0) {
        tablaPacientes.innerHTML = "Ninguno";
        return;
    }

    tablaPacientes.innerHTML = pacientes.map((paciente, index) => `
        <div class="border p-2 my-1">
            <strong>${paciente.nombre} ${paciente.apellido}</strong> - ${paciente.fechaNacimiento} - ${paciente.sexo} - ${paciente.pais}
            <button class="btn btn-sm btn-danger float-end" onclick="eliminarPaciente(${index})">
                <i class="bi bi-trash"></i>
            </button>
            <button class="btn btn-sm btn-primary float-end me-2" onclick="editarPaciente(${index})">
                <i class="bi bi-pencil"></i>
            </button>
        </div>
    `).join('');
};

// Función para eliminar un paciente
const eliminarPaciente = (index) => {
    pacientes.splice(index, 1);
    mostrarNotificacion("Paciente eliminado exitosamente.");
    mostrarPacientes(); // Actualizar la lista de pacientes
};

// Función para editar un paciente
const editarPaciente = (index) => {
    const paciente = pacientes[index];
    inputNombre.value = paciente.nombre;
    inputApellido.value = paciente.apellido;
    inputFechaNacimiento.value = paciente.fechaNacimiento;
    inputSexoMasculino.checked = paciente.sexo === "Masculino";
    inputSexoFemenino.checked = paciente.sexo === "Femenino";
    selectPais.value = paciente.pais; // Si necesitas manejar esto como un valor en el select
    inputDireccion.value = paciente.direccion;

    // Establecer el índice de edición
    indiceEdicion = index;
};

// Función para limpiar el formulario
const limpiarFormulario = () => {
    inputNombre.value = "";
    inputApellido.value = "";
    inputFechaNacimiento.value = "";
    inputSexoMasculino.checked = false;
    inputSexoFemenino.checked = false;
    selectPais.selectedIndex = 0; // Resetear el select
    inputDireccion.value = "";
    indiceEdicion = -1; // Resetear el índice de edición
};

// Función para mostrar notificaciones
const mostrarNotificacion = (mensaje) => {
    const toastBody = document.getElementById("idMensaje");
    toastBody.textContent = mensaje;
    const toast = new bootstrap.Toast(document.getElementById("idNotificacion"));
    toast.show();
};

// Eventos de los botones
btnAgregar.addEventListener("click", agregarOActualizarPaciente);
btnMostrar.addEventListener("click", mostrarPacientes);
btnLimpiar.addEventListener("click", () => {
    pacientes = []; // Limpiar la lista de pacientes
    mostrarPacientes(); // Actualizar la lista
    limpiarFormulario(); // Limpiar el formulario
});
