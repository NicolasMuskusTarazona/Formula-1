import { STORAGE_KEYS_PILOTOS } from './storageKeys.js';
import { obtenerPilotos, guardarPilotos } from './pilotosLocalStorage.js';

// Referencias al DOM
const btnAgregar = document.getElementById('agregarPilotoBtn');
const formContainer = document.getElementById('formContainer');
const lista = document.getElementById('pilotosLista');


// Evento para abrir formulario
btnAgregar.addEventListener('click', () => renderizarFormulario());

// Manejo del envío del formulario
document.addEventListener('submit', (e) => {
    if (e.target.id === 'pilotoForm') {
        e.preventDefault();
        const formData = obtenerDatosFormulario();
        if (!formData) return;

        let pilotosAdmin = obtenerPilotos();
        const existe = pilotosAdmin.find(p => p.numero === formData.numero);

        if (e.target.dataset.edicion === "true") {
            const index = parseInt(e.target.dataset.index);
            pilotosAdmin[index] = formData;
        } else {
            if (existe) {
                alert('Ya existe un piloto con ese número');
                return;
            }
            pilotosAdmin.push(formData);
        }

        guardarPilotos(pilotosAdmin);
        alert('Piloto guardado exitosamente 🏁');
        formContainer.innerHTML = '';
        renderizarPilotos();
    }
});

function obtenerDatosFormulario() {
    try {
        return {
            nombre: document.getElementById('nombre').value,
            edad: parseInt(document.getElementById('edad').value),
            nacionalidad: document.getElementById('nacionalidad').value,
            numero: parseInt(document.getElementById('numero').value),
            equipo: document.getElementById('equipo').value,
            imagen: document.getElementById('imagen').value,
        };
    } catch (err) {
        alert('Error al obtener datos del formulario');
        return null;
    }
}

function renderizarFormulario(piloto = null, index = null) {
    formContainer.innerHTML = `
        <form id="pilotoForm" data-edicion="${piloto ? true : false}" data-index="${index ?? ''}">
            <h2>${piloto ? 'Editar Piloto' : 'Agregar Nuevo Piloto'}</h2>
            <input type="text" id="nombre" placeholder="Nombre" required value="${piloto?.nombre || ''}">
            <input type="number" id="edad" placeholder="Edad" required value="${piloto?.edad || ''}">
            <input type="text" id="nacionalidad" placeholder="Nacionalidad" required value="${piloto?.nacionalidad || ''}">
            <input type="number" id="numero" placeholder="Número de Piloto" required value="${piloto?.numero || ''}">
            <input type="text" id="equipo" placeholder="Equipo" required value="${piloto?.equipo || ''}">
            <input type="url" id="imagen" placeholder="URL de la imagen" value="${piloto?.imagen || ''}">
            <button type="submit">${piloto ? 'Guardar Cambios' : 'Guardar Piloto'}</button>
        </form>
    `;
}

function renderizarPilotos() {
    lista.innerHTML = '';
    const pilotos = obtenerPilotos();

    pilotos.forEach((piloto, index) => {
        const item = document.createElement('li');

        // Aquí pegas el estilo y contenido HTML
        item.style.cssText = `
            border-radius: 15px;
            padding: 20px;
            margin: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: transform 0.3s ease;
        `;
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.03)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });

        item.innerHTML = `
            <img src="${piloto.imagen}" alt="${piloto.nombre}" style="
                width: 100%;
                max-width: 240px;
                border-radius: 12px;
                margin-bottom: 15px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                object-fit: cover;
            ">
            <h3 style="font-size: 1.4rem; color: #333; margin: 5px 0;">${piloto.nombre}</h3>
            <p style="color: #666; font-size: 0.95rem;"><strong>Edad:</strong> ${piloto.edad} años</p>
            <p style="color: #666; font-size: 0.95rem;"><strong>Nacionalidad:</strong> ${piloto.nacionalidad}</p>
            <p style="color: #666; font-size: 0.95rem;"><strong>Equipo:</strong> ${piloto.equipo}</p>
            <div style="display: flex; gap: 10px; margin-top: 12px;">
                <button class="editBtn" style="padding: 8px 16px; background-color:rgb(255, 4, 0); color: #fff; border: none; border-radius: 5px; cursor: pointer;">Editar</button>
                <button class="deleteBtn" style="padding: 8px 16px; background-color:rgb(191, 10, 0); color: #fff; border: none; border-radius: 5px; cursor: pointer;">Eliminar</button>
            </div>
        `;

        // Agregar eventos de edición y eliminación
        item.querySelector('.editBtn').addEventListener('click', () => {
            renderizarFormulario(piloto, index);
        });
        item.querySelector('.deleteBtn').addEventListener('click', () => {
            eliminarPiloto(index);
        });

        lista.appendChild(item);
    });
}


function eliminarPiloto(index) {
    let pilotosAdmin = obtenerPilotos();
    pilotosAdmin.splice(index, 1);
    guardarPilotos(pilotosAdmin);
    renderizarPilotos();
}