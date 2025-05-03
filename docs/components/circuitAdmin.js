// Referencias al DOM
const btnAgregar = document.getElementById('agregarCircuitoBtn');
const formContainer = document.getElementById('formContainer');
const lista = document.getElementById('circuitosLista');

// Mostrar formulario al hacer clic en "Agregar Circuito"
btnAgregar.addEventListener('click', () => {
    if (formContainer.innerHTML === '') {
        formContainer.innerHTML = `
            <form id="circuitForm">
                <input type="text" id="nombre" placeholder="Nombre" required><br>
                <input type="text" id="pais" placeholder="País" required><br>
                <input type="number" id="longitud" placeholder="Longitud (km)" step="0.01"><br>
                <input type="number" id="vueltas" placeholder="Vueltas"><br>
                <input type="text" id="descripcion" placeholder="Descripción"><br>
                <input type="text" id="record" placeholder="Record vuelta (tiempo)"><br>
                <input type="text" id="pilotoRecord" placeholder="Piloto"><br>
                <input type="number" id="añoRecord" placeholder="Año"><br>
                <input type="url" id="imagen" placeholder="URL de la imagen"><br>
                <input type="text" id="desgaste" placeholder="Desgaste neumáticos"><br>
                <input type="text" id="consumo" placeholder="Consumo combustible"><br>
                <input type="text" id="clima" placeholder="Clima (Seco, Lluvia, etc.)"><br><br>
                <button type="submit" class="guardarCircuito">Guardar</button>
            </form>
        `;
    }
});

// Agregar nuevo circuito al hacer submit
document.addEventListener('submit', (e) => {
    if (e.target.id === 'circuitForm') {
        e.preventDefault();
        let circuitosGuardados = JSON.parse(localStorage.getItem('circuitos')) || [];
        let climaGuardado = JSON.parse(localStorage.getItem('climaPorCircuito')) || {};

        const nuevoCircuito = {
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

        const yaExiste = circuitosGuardados.some(c => c.nombre === nuevoCircuito.nombre);
        if (yaExiste) {
            alert('Ya existe un circuito con ese nombre');
            return;
        }

        circuitosGuardados.push(nuevoCircuito);
        localStorage.setItem('circuitos', JSON.stringify(circuitosGuardados));

        const clima = document.getElementById('clima').value;
        climaGuardado[nuevoCircuito.nombre] = clima;
        localStorage.setItem('climaPorCircuito', JSON.stringify(climaGuardado));

        alert('Circuito guardado exitosamente 🏁');
        formContainer.innerHTML = '';
        renderizarCircuitos();
    }
});

// Renderizar los circuitos en la lista
function renderizarCircuitos() {
    lista.innerHTML = '';  // Limpiar la lista antes de agregar los elementos
    const circuitos = JSON.parse(localStorage.getItem('circuitos')) || [];
    circuitos.forEach((circuito, index) => {
        const item = document.createElement('li');
        item.style.backgroundColor = '#f0f0f0';  // Fondo gris claro
        item.style.color = '#333';              // Texto oscuro
        item.style.padding = '10px';
        item.style.margin = '10px 0';
        item.style.borderRadius = '5px';
        item.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        item.style.display = 'flex';
        item.style.justifyContent = 'space-between';
        item.style.alignItems = 'center';
        item.innerHTML = `
            <div>
                <strong>${circuito.nombre}</strong> - ${circuito.pais}
            </div>
            <div>
                <button class="editBtn" style="background-color: #4CAF50; color: white; border: none; padding: 5px 10px; border-radius: 3px; margin-right: 5px;">Editar</button>
                <button class="deleteBtn" style="background-color: #f44336; color: white; border: none; padding: 5px 10px; border-radius: 3px;">Eliminar</button>
            </div>
        `;
        const editarBtn = item.querySelector('.editBtn');
        const eliminarBtn = item.querySelector('.deleteBtn');

        editarBtn.addEventListener('click', () => editarCircuito(index));
        eliminarBtn.addEventListener('click', () => eliminarCircuito(index));

        lista.appendChild(item);
    });
}

// Funcion para eliminar un circuito
function eliminarCircuito(index) {
    let circuitosGuardados = JSON.parse(localStorage.getItem('circuitos')) || [];
    circuitosGuardados.splice(index, 1);  // Eliminar el circuito en el indice indicado
    localStorage.setItem('circuitos', JSON.stringify(circuitosGuardados));  // Guardar los cambios en el localStorage
    renderizarCircuitos();  // Volver a renderizar la lista
}

// Funcion para mostrar el formulario de edición con los datos del circuito
function editarCircuito(id) {
    let circuitosGuardados = JSON.parse(localStorage.getItem('circuitos')) || [];
    const circuito = circuitosGuardados[id];

    formContainer.innerHTML = `
        <form id="circuitForm">
            <input type="text" id="nombre" value="${circuito.nombre}" required><br>
            <input type="text" id="pais" value="${circuito.pais}" required><br>
            <input type="number" id="longitud" value="${circuito.longitud_km}" step="0.01"><br>
            <input type="number" id="vueltas" value="${circuito.vueltas}"><br>
            <input type="text" id="descripcion" value="${circuito.descripcion}"><br>
            <input type="text" id="record" value="${circuito.record_vuelta.tiempo}"><br>
            <input type="text" id="pilotoRecord" value="${circuito.record_vuelta.piloto}"><br>
            <input type="number" id="añoRecord" value="${circuito.record_vuelta.año}"><br>
            <input type="url" id="imagen" value="${circuito.imagen}"><br>
            <input type="text" id="desgaste" value="${circuito.desgaste_neumaticos}"><br>
            <input type="text" id="consumo" value="${circuito.consumo_combustible}"><br>
            <input type="text" id="clima" value="${JSON.parse(localStorage.getItem('climaPorCircuito'))[circuito.nombre]}"><br><br>
            <button type="submit" class="guardarCircuito">Guardar cambios</button>
        </form>
    `;

    document.getElementById('circuitForm').addEventListener('submit', (e) => {
        e.preventDefault();

        circuito.nombre = document.getElementById('nombre').value;
        circuito.pais = document.getElementById('pais').value;
        circuito.longitud_km = parseFloat(document.getElementById('longitud').value);
        circuito.vueltas = parseInt(document.getElementById('vueltas').value);
        circuito.descripcion = document.getElementById('descripcion').value;
        circuito.record_vuelta = {
            tiempo: document.getElementById('record').value,
            piloto: document.getElementById('pilotoRecord').value,
            año: parseInt(document.getElementById('añoRecord').value)
        };
        circuito.imagen = document.getElementById('imagen').value;
        circuito.desgaste_neumaticos = document.getElementById('desgaste').value;
        circuito.consumo_combustible = document.getElementById('consumo').value;
        
        let climaGuardado = JSON.parse(localStorage.getItem('climaPorCircuito')) || {};
        climaGuardado[circuito.nombre] = document.getElementById('clima').value;
        localStorage.setItem('climaPorCircuito', JSON.stringify(climaGuardado));

        // Guardar los cambios en el localStorage
        let circuitosGuardados = JSON.parse(localStorage.getItem('circuitos')) || [];
        circuitosGuardados[id] = circuito;
        localStorage.setItem('circuitos', JSON.stringify(circuitosGuardados));

        // Volver a renderizar los circuitos
        renderizarCircuitos();
        formContainer.innerHTML = '';
    });
}

// Renderizar los circuitos al inicio
renderizarCircuitos();
