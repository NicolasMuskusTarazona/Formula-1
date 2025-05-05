
// vehiclesAdmin.js

import { STORAGE_KEYS } from './storageKeys.js';
import { obtenerVehiculos, guardarVehiculos } from './vehiclesLocalStorage.js';

// Referencias al DOM
const btnAgregar = document.getElementById('agregarVehiculoBtn');
const formContainer = document.getElementById('formContainer');
const lista = document.getElementById('vehiculosLista');

// Evento para abrir formulario
btnAgregar.addEventListener('click', () => renderizarFormulario());

// Manejo del envío del formulario
document.addEventListener('submit', (e) => {
    if (e.target.id === 'vehiculoForm') {
        e.preventDefault();
        const formData = obtenerDatosFormulario();
        if (!formData) return;

        let vehiculosAdmin = obtenerVehiculos(); // Obtener vehículos desde localStorage
        const existe = vehiculosAdmin.find(v => v.modelo === formData.modelo);

        if (e.target.dataset.edicion === "true") {
            const index = parseInt(e.target.dataset.index);
            vehiculosAdmin[index] = formData;
        } else {
            if (existe) {
                alert('Ya existe un vehículo con ese modelo');
                return;
            }
            vehiculosAdmin.push(formData);
        }

        guardarVehiculos(vehiculosAdmin); // Guardar los vehículos de vuelta en localStorage

        alert('Vehículo guardado exitosamente 🏎️');
        formContainer.innerHTML = '';
        renderizarVehiculos();
    }
});

function obtenerDatosFormulario() {
    try {
        return {
            modelo: document.getElementById('modelo').value,
            equipo: document.getElementById('equipo').value,
            motor: document.getElementById('motor').value,
            velocidad_maxima_kmh: parseFloat(document.getElementById('velocidadMaxima').value),
            aceleracion_0_100: parseFloat(document.getElementById('aceleracion').value),
            pilotos: document.getElementById('pilotos').value.split(',').map(Number),
            imagen: document.getElementById('imagen').value,
            desgaste_neumaticos: document.getElementById('desgaste').value,
            consumo_combustible: document.getElementById('consumo').value
        };
    } catch (err) {
        alert('Error al obtener datos del formulario');
        return null;
    }
}

function renderizarFormulario(vehiculo = null, index = null) {
    formContainer.innerHTML = `
        <form id="vehiculoForm" data-edicion="${vehiculo ? true : false}" data-index="${index ?? ''}">
            <style>
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                gap: 20px;
                padding: 30px;
                background-color: #f9f9f9;
                border-radius: 15px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                margin: 30px auto;
                max-width: 1000px;
            </style>
            <h2 style="grid-column: 1 / -1; font-size: 1.8rem; color: #333; text-align: center;">
                ${vehiculo ? 'Editar Vehículo' : 'Agregar Nuevo Vehículo'}
            </h2>
            <input type="text" id="modelo" placeholder="Modelo" required value="${vehiculo?.modelo || ''}" style="padding: 10px; border-radius: 8px; border: 1px solid #ccc;">
            <input type="text" id="equipo" placeholder="Equipo" required value="${vehiculo?.equipo || ''}" style="padding: 10px; border-radius: 8px; border: 1px solid #ccc;">
            <input type="text" id="motor" placeholder="Motor" required value="${vehiculo?.motor || ''}" style="padding: 10px; border-radius: 8px; border: 1px solid #ccc;">
            <input type="number" id="velocidadMaxima" placeholder="Velocidad máxima (km/h)" step="0.1" value="${vehiculo?.velocidad_maxima_kmh || ''}" style="padding: 10px; border-radius: 8px; border: 1px solid #ccc;">
            <input type="number" id="aceleracion" placeholder="Aceleración 0-100 km/h (seg)" step="0.1" value="${vehiculo?.aceleracion_0_100 || ''}" style="padding: 10px; border-radius: 8px; border: 1px solid #ccc;">
            <input type="text" id="pilotos" placeholder="Pilotos (separados por coma)" value="${vehiculo?.pilotos?.join(', ') || ''}" style="padding: 10px; border-radius: 8px; border: 1px solid #ccc;">
            <input type="url" id="imagen" placeholder="URL de la imagen" value="${vehiculo?.imagen || ''}" style="padding: 10px; border-radius: 8px; border: 1px solid #ccc;">
            <input type="text" id="desgaste" placeholder="Desgaste neumáticos" value="${vehiculo?.desgaste_neumaticos || ''}" style="padding: 10px; border-radius: 8px; border: 1px solid #ccc;">
            <input type="text" id="consumo" placeholder="Consumo combustible" value="${vehiculo?.consumo_combustible || ''}" style="padding: 10px; border-radius: 8px; border: 1px solid #ccc;">
            <div style="grid-column: 1 / -1; display: flex; justify-content: center; margin-top: 20px;">
                <button type="submit" class="save-button" style="
                    background-color: #007BFF;
                    color: white;
                    padding: 12px 30px;
                    border: none;
                    border-radius: 8px;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                ">
                    ${vehiculo ? 'Guardar Cambios' : 'Guardar Vehículo'}
                </button>
            </div>
        </form>
    `;
}

function renderizarVehiculos() {
    lista.innerHTML = '';
    const vehiculosAdmin = obtenerVehiculos();
    vehiculosAdmin.forEach((vehiculo, index) => {
        const item = document.createElement('li');
        item.style.cssText = `
            background-color: #fff;
            color: #333;
            padding: 20px;
            margin: 15px 0 15px 30px;
            border-radius: 10px;
            box-shadow: 0 6px 12px rgba(0,0,0,0.1);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            transition: all 0.3s ease-in-out;
        `;
        item.innerHTML = `
            <div style="font-size: 1.2rem; font-weight: bold; color: #4CAF50;">${vehiculo.modelo}</div>
            <div style="font-size: 1rem; color: #888;">${vehiculo.equipo}</div>
            <div style="display: flex; gap: 12px; margin-top: 12px;">
                <button class="editBtn" style="padding: 8px 16px; background-color: #007BFF; color: #fff; border: none; border-radius: 5px; cursor: pointer;">Editar</button>
                <button class="deleteBtn" style="padding: 8px 16px; background-color: #FF5733; color: #fff; border: none; border-radius: 5px; cursor: pointer;">Eliminar</button>
            </div>
            <div class="infoContainer" style="margin-top: 20px; font-size: 0.95rem; color: #444; width: 100%;">
                <div><strong>Velocidad máxima:</strong> ${vehiculo.velocidad_maxima_kmh} km/h</div>
                <div><strong>Aceleración (0-100 km/h):</strong> ${vehiculo.aceleracion_0_100} s</div>
                <div><strong>Pilotos:</strong> ${vehiculo.pilotos.join(', ')}</div>
                <div><strong>Desgaste neumáticos:</strong> ${vehiculo.desgaste_neumaticos}</div>
                <div><strong>Consumo combustible:</strong> ${vehiculo.consumo_combustible}</div>
                <div style="margin-top: 15px;">
                    <strong>Imagen:</strong>
                    <div style="width: 100%; margin-top: 10px;">
                        <img src="${vehiculo.imagen}" alt="Imagen del vehículo" style="max-width: 100%; height: auto; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
                    </div>
                </div>
            </div>
        `;
        item.querySelector('.editBtn').addEventListener('click', () => renderizarFormulario(vehiculo, index));
        item.querySelector('.deleteBtn').addEventListener('click', () => eliminarVehiculo(index));
        lista.appendChild(item);
    });
}

function eliminarVehiculo(index) {
    let vehiculosAdmin = obtenerVehiculos();
    vehiculosAdmin.splice(index, 1);
    guardarVehiculos(vehiculosAdmin); // Guardar los vehículos después de la eliminación
    renderizarVehiculos();
}
