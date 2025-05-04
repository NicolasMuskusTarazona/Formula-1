// circuitAdmin-container.js

import circuitosAdmin from './circuitsLocalStorage.js'; // Importa correctamente los datos

// El resto del código sigue igual...
class CircuitContainerAdmin extends HTMLElement {
    constructor() {
        super();
        this.allData = [];
        this.climas = {};
    }

    connectedCallback() {
        // Establece la estructura HTML inicial
        this.innerHTML = `<section class="circuitos"></section>`;
        
        // Al cargar la página, obtén los datos desde localStorage
        this.loadDataFromLocalStorage();
    }

    loadDataFromLocalStorage() {
        // Obtén los datos de localStorage
        const circuitosGuardados = JSON.parse(localStorage.getItem('circuitosAdmin')) || [];
        const climaGuardado = JSON.parse(localStorage.getItem('climaPorCircuitoAdmin')) || {};
        
        // Llama a renderData con los datos obtenidos de localStorage
        this.renderData(circuitosGuardados, climaGuardado);
    }

    renderData(data, climas) {
        this.allData = data;
        this.climas = climas;
        this._renderList(data);
    }

    // Filtro por nombre o país
    filterByName(valor) {
        const filtro = valor.toLowerCase().trim();
        if (!filtro) {
            this._renderList(this.allData);
            return;
        }
        const filtrados = this.allData.filter(circuito =>
            circuito.nombre.toLowerCase().includes(filtro) ||
            circuito.pais.toLowerCase().includes(filtro)
        );
        this._renderList(filtrados);
    }

    // Renderiza la lista de circuitos
    _renderList(data) {
        const section = this.querySelector('.circuitos');
        section.innerHTML = ''; // Limpia la lista actual

        if (data.length === 0) {
            section.innerHTML = `<p style="color: red; font-size: 40px;">No se encontraron circuitos con ese nombre o país.</p>`;
            return;
        }

        // Para cada circuito, crea un elemento HTML
        data.forEach((circuito, index) => {
            const ganadoresHTML = circuito.ganadores && circuito.ganadores.length > 0 ? 
                `<ul class="lista-ganadores">` +
                circuito.ganadores.slice(0, 3).map(g => 
                    `<li>Temporada: ${g.temporada}, Piloto: ${g.piloto}</li>`
                ).join('') +
                `</ul>` : '<p style="color: black; font-weight: bold;">No hay ganadores registrados</p>';
            
            const circuitoElement = document.createElement('article');
            circuitoElement.classList.add('circuito');
            circuitoElement.innerHTML = `
                <h2 class="nombre">${circuito.nombre}</h2>
                <img 
                    src="${circuito.imagen}" 
                    alt="Mapa de ${circuito.nombre}" 
                    class="imagen-circuito"
                >
                <p class="pais">${circuito.pais}</p><hr>
                <p class="info"><strong>Longitud:</strong> ${circuito.longitud_km} km</p><hr>
                <p class="info"><strong>Vueltas:</strong> ${circuito.vueltas}</p><hr>
                <p class="descripcion"><strong>Descripcion:</strong> ${circuito.descripcion}</p><hr>
                <p class="info"><strong>Record:</strong> ${circuito.record_vuelta.tiempo} - ${circuito.record_vuelta.piloto} (${circuito.record_vuelta.año})</p><hr>
                <p class="info"><strong>Ganadores:</strong> ${ganadoresHTML}</p><br>
                <p class="info"><strong>Clima Promedio:</strong> ${this.climas[circuito.nombre]}</p><hr>
                <p class="info"><strong>Desgaste Neumáticos:</strong> ${circuito.desgaste_neumaticos}</p>
                <p class="info"><strong>Consumo Combustible:</strong> ${circuito.consumo_combustible}</p>
                <button class="deleteBtn">Eliminar</button>
                <button class="editBtn">Editar</button>
            `;
            
            // Event listeners para el botón de eliminar y editar
            circuitoElement.querySelector('.deleteBtn').addEventListener('click', () => this.deleteCircuito(index));
            circuitoElement.querySelector('.editBtn').addEventListener('click', () => this.editCircuito(index, circuito));

            section.appendChild(circuitoElement);
        });
    }

    // Función para actualizar los datos de localStorage después de la edición o eliminación
    updateLocalStorage() {
        localStorage.setItem('circuitos', JSON.stringify(this.allData));
        localStorage.setItem('climaPorCircuito', JSON.stringify(this.climas));
    }

    // Función para eliminar un circuito
    deleteCircuito(index) {
        this.allData.splice(index, 1);  // Elimina el circuito en el índice proporcionado
        this.updateLocalStorage();  // Actualiza localStorage
        this._renderList(this.allData);  // Vuelve a renderizar la lista de circuitos
    }

    // Función para editar un circuito
    editCircuito(index, updatedCircuit) {
        const formContainer = document.getElementById('formContainer');
        formContainer.innerHTML = `
            <form id="editCircuitForm">
                <input type="text" id="nombre" value="${updatedCircuit.nombre}" required><br>
                <input type="text" id="pais" value="${updatedCircuit.pais}" required><br>
                <input type="number" id="longitud" value="${updatedCircuit.longitud_km}" step="0.01"><br>
                <input type="number" id="vueltas" value="${updatedCircuit.vueltas}"><br>
                <input type="text" id="descripcion" value="${updatedCircuit.descripcion}"><br>
                <input type="text" id="record" value="${updatedCircuit.record_vuelta.tiempo}"><br>
                <input type="text" id="pilotoRecord" value="${updatedCircuit.record_vuelta.piloto}"><br>
                <input type="number" id="añoRecord" value="${updatedCircuit.record_vuelta.año}"><br>
                <input type="url" id="imagen" value="${updatedCircuit.imagen}"><br>
                <input type="text" id="desgaste" value="${updatedCircuit.desgaste_neumaticos}"><br>
                <input type="text" id="consumo" value="${updatedCircuit.consumo_combustible}"><br>
                <input type="text" id="clima" value="${this.climas[updatedCircuit.nombre]}" required><br><br>
                <button type="submit">Guardar Cambios</button>
            </form>
        `;
        const editForm = document.getElementById('editCircuitForm');
        editForm.addEventListener('submit', (event) => this.saveEdit(index, event, updatedCircuit));
    }

    saveEdit(index, event, updatedCircuit) {
        event.preventDefault();
        updatedCircuit.nombre = document.getElementById('nombre').value;
        updatedCircuit.pais = document.getElementById('pais').value;
        updatedCircuit.longitud_km = document.getElementById('longitud').value;
        updatedCircuit.vueltas = document.getElementById('vueltas').value;
        updatedCircuit.descripcion = document.getElementById('descripcion').value;
        updatedCircuit.record_vuelta.tiempo = document.getElementById('record').value;
        updatedCircuit.record_vuelta.piloto = document.getElementById('pilotoRecord').value;
        updatedCircuit.record_vuelta.año = document.getElementById('añoRecord').value;
        updatedCircuit.imagen = document.getElementById('imagen').value;
        updatedCircuit.desgaste_neumaticos = document.getElementById('desgaste').value;
        updatedCircuit.consumo_combustible = document.getElementById('consumo').value;
        this.climas[updatedCircuit.nombre] = document.getElementById('clima').value;

        this.allData[index] = updatedCircuit;
        this.updateLocalStorage();
        this._renderList(this.allData);
    }
}

customElements.define('circuit-container-admin', CircuitContainerAdmin);
