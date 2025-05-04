// Referencias al DOM
import { STORAGE_KEYS } from './storageKeys.js';
import circuitosAdmin from './circuitsLocalStorage.js';

const btnAgregar = document.getElementById('agregarCircuitoBtn');
const formContainer = document.getElementById('formContainer');
const lista = document.getElementById('circuitosLista');

// Evento para abrir formulario
btnAgregar.addEventListener('click', () => renderizarFormulario());

// Manejo del envío del formulario
document.addEventListener('submit', (e) => {
    if (e.target.id === 'circuitForm') {
        e.preventDefault();
        const formData = obtenerDatosFormulario();
        if (!formData) return;

        let circuitos = JSON.parse(localStorage.getItem('circuitos')) || [];
        const existe = circuitos.find(c => c.nombre === formData.nombre);
        const clima = document.getElementById('clima').value;
        formData.clima = clima;

        if (e.target.dataset.edicion === "true") {
            const index = parseInt(e.target.dataset.index);
            circuitos[index] = formData;
        } else {
            if (existe) {
                alert('Ya existe un circuito con ese nombre');
                return;
            }
            circuitos.push(formData);
        }

        const climas = JSON.parse(localStorage.getItem('climaPorCircuito')) || {};
        climas[formData.nombre] = clima;

        localStorage.setItem('circuitos', JSON.stringify(circuitos));
        localStorage.setItem('climaPorCircuito', JSON.stringify(climas));

        alert('Circuito guardado exitosamente 🏁');
        formContainer.innerHTML = '';
        renderizarCircuitos();
    }
});

function obtenerDatosFormulario() {
    try {
        return {
            nombre: document.getElementById('nombre').value,
            pais: document.getElementById('pais').value,
            longitud_km: parseFloat(document.getElementById('longitud').value),
            vueltas: parseInt(document.getElementById('vueltas').value),
            descripcion: document.getElementById('descripcion').value,
            record_vuelta: {
                tiempo: document.getElementById('record').value,
                piloto: document.getElementById('pilotoRecord').value,
                año: parseInt(document.getElementById('añoRecord').value)
            },
            ganadores: [],
            imagen: document.getElementById('imagen').value,
            desgaste_neumaticos: document.getElementById('desgaste').value,
            consumo_combustible: document.getElementById('consumo').value
        };
    } catch (err) {
        alert('Error al obtener datos del formulario');
        return null;
    }
}

function renderizarFormulario(circuito = null, index = null) {
    const climas = JSON.parse(localStorage.getItem('climaPorCircuito')) || {};
    const isEdit = circuito !== null;

    formContainer.innerHTML = `
        <form id="circuitForm" data-edicion="${isEdit}" data-index="${index ?? ''}"
        style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 20px; width: 100%;">
            <input type="text" id="nombre" placeholder="Nombre" required value="${circuito?.nombre || ''}">
            <input type="text" id="pais" placeholder="País" required value="${circuito?.pais || ''}">
            <input type="number" id="longitud" placeholder="Longitud (km)" step="0.01" value="${circuito?.longitud_km || ''}">
            <input type="number" id="vueltas" placeholder="Vueltas" value="${circuito?.vueltas || ''}">
            <input type="text" id="descripcion" placeholder="Descripción" value="${circuito?.descripcion || ''}">
            <input type="text" id="record" placeholder="Record vuelta (tiempo)" value="${circuito?.record_vuelta?.tiempo || ''}">
            <input type="text" id="pilotoRecord" placeholder="Piloto" value="${circuito?.record_vuelta?.piloto || ''}">
            <input type="number" id="añoRecord" placeholder="Año" value="${circuito?.record_vuelta?.año || ''}">
            <input type="url" id="imagen" placeholder="URL de la imagen" value="${circuito?.imagen || ''}">
            <input type="text" id="ganadores" placeholder="Ganadores" value="${circuito?.ganadores?.join(', ') || ''}">
            <input type="text" id="desgaste" placeholder="Desgaste neumáticos" value="${circuito?.desgaste_neumaticos || ''}">
            <input type="text" id="consumo" placeholder="Consumo combustible" value="${circuito?.consumo_combustible || ''}">
            <input type="text" id="clima" placeholder="Clima" value="${climas[circuito?.nombre] || ''}">
            <div style="grid-column: span 3; text-align: center;">
                <button type="submit">${isEdit ? 'Guardar cambios' : 'Guardar'}</button>
            </div>
        </form>
    `;
}

function renderizarCircuitos() {
    lista.innerHTML = '';
    const circuitos = JSON.parse(localStorage.getItem('circuitos')) || [];

    circuitos.forEach((circuito, index) => {
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
            <div style="font-size: 1.2rem; font-weight: bold; color: #4CAF50;">${circuito.nombre}</div>
            <div style="font-size: 1rem; color: #888;">${circuito.pais}</div>
            <div style="display: flex; gap: 12px; margin-top: 12px;">
                <button class="editBtn" style="padding: 8px 16px; background-color: #007BFF; color: #fff; border: none; border-radius: 5px; cursor: pointer;">Editar</button>
                <button class="deleteBtn" style="padding: 8px 16px; background-color: #FF5733; color: #fff; border: none; border-radius: 5px; cursor: pointer;">Eliminar</button>
            </div>
            <div class="infoContainer" style="margin-top: 20px; font-size: 0.95rem; color: #444; width: 100%;">
                <div><strong>Longitud:</strong> ${circuito.longitud_km} km</div>
                <div><strong>Vueltas:</strong> ${circuito.vueltas}</div>
                <div><strong>Descripción:</strong> ${circuito.descripcion}</div>
                <div><strong>Record vuelta:</strong> ${circuito.record_vuelta.tiempo} (${circuito.record_vuelta.piloto} - ${circuito.record_vuelta.año})</div>
                <div><strong>Clima:</strong> ${circuito.clima}</div>
                <div style="margin-top: 15px;">
                    <strong>Imagen:</strong>
                    <div style="width: 100%; margin-top: 10px;">
                        <img src="${circuito.imagen}" alt="Imagen del circuito" style="max-width: 100%; height: auto; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
                    </div>
                </div>
            </div>
        `;

        item.querySelector('.editBtn').addEventListener('click', () => renderizarFormulario(circuito, index));
        item.querySelector('.deleteBtn').addEventListener('click', () => eliminarCircuito(index));
        lista.appendChild(item);
    });
}

function eliminarCircuito(index) {
    let circuitos = JSON.parse(localStorage.getItem('circuitos')) || [];
    const eliminado = circuitos[index];
    circuitos.splice(index, 1);
    localStorage.setItem('circuitos', JSON.stringify(circuitos));

    const climas = JSON.parse(localStorage.getItem('climaPorCircuito')) || {};
    delete climas[eliminado.nombre];
    localStorage.setItem('climaPorCircuito', JSON.stringify(climas));

    renderizarCircuitos();
}

function guardarCircuitosAdmin() {
    localStorage.setItem(STORAGE_KEYS.CIRCUITOSADMIN, JSON.stringify(circuitosAdmin));
}

setTimeout(guardarCircuitosAdmin, 10);
renderizarCircuitos();
