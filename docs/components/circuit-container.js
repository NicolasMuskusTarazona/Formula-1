class CircuitContainer extends HTMLElement {
    constructor() {
        super();
        this.allData = [];
    }
    //HTML
    connectedCallback() {
        this.innerHTML = `<section class="circuitos"></section>`;
    }
    renderData(data, climas) {
        this.allData = data;
        this.climas = climas;
        this._renderList(data);
    }
    
    //Filtro Input
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
    // No existe Circuito
    _renderList(data) {
        const section = this.querySelector('.circuitos');
        section.innerHTML = '';
        if (data.length === 0) {
            section.innerHTML = `<p style="color: red; font-size: 40px;">No se encontraron circuitos con ese nombre o país.</p>`;
            return;
        }
    //Ultimos Ganadores
        data.forEach(circuito => {
            const ganadoresHTML = circuito.ganadores && circuito.ganadores.length > 0 ? 
                `<ul class="lista-ganadores">` +
                circuito.ganadores.slice(0, 3).map(g => 
                    `<li>Temporada: ${g.temporada}, Piloto: ${g.piloto}</li>`
                ).join('') +
                `</ul>` : '<p>No hay ganadores registrados</p>';
    // Contenedor Circuitos
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
            `;
            circuitoElement.addEventListener('click', function() {
                this.classList.toggle('expanded');
            });
            section.appendChild(circuitoElement);
        });
    }
}

customElements.define('circuit-container', CircuitContainer);
