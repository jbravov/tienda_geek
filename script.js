// script.js
document.getElementById('agregar').addEventListener('click', function() {
    const nombre = document.querySelector('[data-input="nombre"]').value;
    const precio = document.querySelector('[data-input="precio"]').value;
    const imagenInput = document.querySelector('[data-input="imagen"]');
    const imagenFile = imagenInput.files[0];

    if (nombre && precio && imagenFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            agregarTarjeta(nombre, precio, event.target.result);
        };
        reader.readAsDataURL(imagenFile);
        limpiarInputs();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

document.getElementById('limpiar').addEventListener('click', limpiarInputs);

function agregarTarjeta(nombre, precio, imagenSrc) {
    const listaTarjetas = document.getElementById('lista-tarjetas');

    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';

    tarjeta.innerHTML = `
        <h3>${nombre}</h3>
        <p>Precio: $${precio}</p>
        <img src="${imagenSrc}" alt="${nombre}">
        <button onclick="eliminarTarjeta(this)">Eliminar</button>
    `;

    listaTarjetas.appendChild(tarjeta);
}

function limpiarInputs() {
    document.querySelector('[data-input="nombre"]').value = '';
    document.querySelector('[data-input="precio"]').value = '';
    document.querySelector('[data-input="imagen"]').value = '';
}

function eliminarTarjeta(boton) {
    const tarjeta = boton.parentElement;
    tarjeta.remove();
}
