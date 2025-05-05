import { obtenerPilotos } from "./equipos-localstorage.js";

class AdmiEquipos extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  set equipos(data) {
    this._equipos = data;
    this.render();
  }

  get equipos() {
    return this._equipos || [];
  }

  render() {
    const pilotos = obtenerPilotos();  // Obtenemos los pilotos desde localStorage
    this.shadowRoot.innerHTML = `
      <div class="lista-equipos">
        ${this.equipos.map(eq => {
          const pilotosHTML = eq.pilotos.map(id => {
            const piloto = pilotos.find(p => p.id === id);
            return `
              <div class="piloto">
                <span>${piloto?.nombre || "Piloto desconocido"}</span>
                <img src="${piloto?.foto}" alt="${piloto?.nombre}" class="foto-piloto" />
              </div>
            `;
          }).join(""); // Unimos los pilotos en HTML

          return `
            <div class="carta-equipo">
              <div class="carta-inner">
                <div class="carta-front">
                  <img src="${eq.imagen}" alt="${eq.nombre}" width="100%" height="100%">
                </div>
                <div class="carta-back">
                  <h3 class="equipo-nombre">${eq.nombre}
                    <img src="${eq.imagen}" alt="Logo ${eq.nombre}" class="logo-equipo" />
                  </h3>
                  <p><strong>País:</strong> ${eq.pais}</p>
                  <p><strong>Motor:</strong> ${eq.motor}</p>
                  <div class="pilotos-back">
                    ${pilotosHTML}
                  </div>
                  <div>
                    <img src="${eq.carro}" alt="${eq.nombre}" width="100%">
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }
}

customElements.define("admi-equipos", AdmiEquipos);
