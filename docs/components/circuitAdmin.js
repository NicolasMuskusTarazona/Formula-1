// SIEMPRE los imports van arriba
// No es necesario importar 'circuitos' ni 'climaPorCircuito' si ya los manejas con localStorage

// Referencias al DOM
const btnAgregar = document.getElementById('agregarCircuitoBtn')
const formContainer = document.getElementById('formContainer')
const lista = document.getElementById('circuitosLista')

// Mostrar formulario al hacer clic
btnAgregar.addEventListener('click', () => {
    // Verificar si el formulario ya está visible
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
        // Cargar los circuitos y clima guardados desde localStorage
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
        // Verificar si el circuito ya existe
        const yaExiste = circuitosGuardados.some(c => c.nombre === nuevoCircuito.nombre)
        if (yaExiste) {
            alert('Ya existe un circuito con ese nombre')
            return;
        }
        // Guardar el nuevo circuito y clima en el localStorage
        circuitosGuardados.push(nuevoCircuito)
        localStorage.setItem('circuitos', JSON.stringify(circuitosGuardados))
        const clima = document.getElementById('clima').value
        climaGuardado[nuevoCircuito.nombre] = clima
        localStorage.setItem('climaPorCircuito', JSON.stringify(climaGuardado))
        alert('Circuito guardado exitosamente 🏁')
        formContainer.innerHTML = ''
    }
});
