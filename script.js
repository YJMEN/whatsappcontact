
function enviarWhatsApp(event) {
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const celular = document.getElementById('celular').value;
    const mensaje = document.getElementById('mensaje').value;

    const mensajeWhatsApp = `Nombre: ${nombre}%0ACelular: ${celular}%0AMensaje: ${mensaje}`;

    const numeroWhatsApp = '573214453572';

    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`;

    window.open(urlWhatsApp, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('miFormulario');
    formulario.addEventListener('submit', enviarWhatsApp);
});
