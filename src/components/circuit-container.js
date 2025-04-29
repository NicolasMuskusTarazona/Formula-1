// circuit-container.js
class CircuitContainer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `<section class="circuitos"></section>`;
    }
    renderData(data) {
        const section = this.querySelector('.circuitos');
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
