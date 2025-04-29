class CircuitContainer extends HTMLElement {
    constructor() {
        super();
        this.allData = [];
    }

    connectedCallback() {
        this.innerHTML = `<section class="circuitos"></section>`;
    }

    renderData(data) {
        this.allData = data;
        this._renderList(data);
    }

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

    _renderList(data) {
        const section = this.querySelector('.circuitos');
        section.innerHTML = '';

        if (data.length === 0) {
            section.innerHTML = `<p style="color: red;font-size:40px;">No se encontraron circuitos con ese nombre o país.</p>`;
            return;
        }

        data.forEach(circuito => {
            section.innerHTML += `
        <article class="circuito" style="margin-bottom: 2rem;">
            <h2 class="nombre">${circuito.nombre}</h2>
            <img 
                src="${circuito.imagen}" 
                alt="Mapa de ${circuito.nombre}" 
                style="width: 100%; max-width: 400px; height: auto; display: block; margin: 10px 0;"
            >
            <p class="pais">${circuito.pais}</p><hr>
            <p class="info"><strong>Longitud:</strong> ${circuito.longitud_km} km</p><hr>
            <p class="info"><strong>Vueltas:</strong> ${circuito.vueltas}</p><hr>
            <p class="descripcion"><strong>Descripción:</strong> ${circuito.descripcion}</p><hr>
            <p class="info"><strong>Récord:</strong> ${circuito.record_vuelta.tiempo} - ${circuito.record_vuelta.piloto} (${circuito.record_vuelta.año})</p>
        </article>
            `;
        });
    }
}

customElements.define('circuit-container', CircuitContainer);
