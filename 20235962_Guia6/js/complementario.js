document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario

    const carnet = document.getElementById('carnet').value.toUpperCase(); // Transformar a mayúsculas
    const nombre = document.getElementById('nombre').value;
    const dui = document.getElementById('dui').value;
    const nit = document.getElementById('nit').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const correo = document.getElementById('correo').value;
    const edad = document.getElementById('edad').value;

    // Validaciones
    const regexCarnet = /^[A-Za-z]{2}\d{3}$/;
    const regexNombre = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;
    const regexDUI = /^\d{8}-\d$/; // Mantener este regex para validación
    const regexNIT = /^\d{4}-\d{6}-\d{3}-\d$/;
    const regexFechaNacimiento = /^\d{2}\/\d{2}\/\d{4}$/;
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexEdad = /^\d+$/;

    if (!regexCarnet.test(carnet)) {
        alert('Carnet inválido. Debe tener el formato AB001.');
        return;
    }
    if (!regexNombre.test(nombre)) {
        alert('Nombre inválido. Solo se permiten letras y espacios.');
        return;
    }
    if (!regexDUI.test(dui)) {
        alert('DUI inválido. Debe tener el formato ########-#.');
        return;
    }
    if (!regexNIT.test(nit)) {
        alert('NIT inválido. Debe tener el formato ####-######-###-#.');
        return;
    }
    if (!regexFechaNacimiento.test(fechaNacimiento)) {
        alert('Fecha de nacimiento inválida. Debe tener el formato DD/MM/AAAA.');
        return;
    }
    if (!regexCorreo.test(correo)) {
        alert('Correo electrónico inválido.');
        return;
    }
    if (!regexEdad.test(edad)) {
        alert('Edad inválida. Solo se permiten números.');
        return;
    }

    alert('Formulario enviado correctamente!');
    // Aquí puedes proceder a enviar el formulario o hacer otra acción
});

// Formatear el NIT y la Fecha de Nacimiento
document.getElementById('nit').addEventListener('input', function(event) {
    let value = event.target.value.replace(/-/g, ''); // Eliminar guiones
    if (value.length > 14) value = value.slice(0, 14); // Limitar a 14 caracteres
    if (value.length > 10) {
        value = value.replace(/(\d{4})(\d{6})(\d{3})(\d+)/, '$1-$2-$3-$4');
    } else if (value.length > 6) {
        value = value.replace(/(\d{4})(\d{6})(\d+)/, '$1-$2-$3');
    } else if (value.length > 4) {
        value = value.replace(/(\d{4})(\d+)/, '$1-$2');
    }
    event.target.value = value;
});

document.getElementById('fechaNacimiento').addEventListener('input', function(event) {
    let value = event.target.value.replace(/\//g, ''); // Eliminar barras
    if (value.length > 10) value = value.slice(0, 10); // Limitar a 10 caracteres
    if (value.length > 6) {
        value = value.replace(/(\d{2})(\d{2})(\d+)/, '$1/$2/$3');
    } else if (value.length > 4) {
        value = value.replace(/(\d{2})(\d+)/, '$1/$2');
    }
    event.target.value = value;
});

document.getElementById('dui').addEventListener('input', function(event) {
    let value = event.target.value.replace(/-/g, ''); // Eliminar guiones
    if (value.length > 9) value = value.slice(0, 9); // Limitar a 9 caracteres
    if (value.length > 7) {
        value = value.replace(/(\d{8})(\d+)/, '$1-$2');
    }
    event.target.value = value;
});
