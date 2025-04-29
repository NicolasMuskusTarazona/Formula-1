// circuit-search.js
class CircuitSearch extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px; margin-left: 12px;">
                <input 
                    type="text" 
                    id="buscador" 
                    placeholder="Buscar por Nombre o Pais"
                    style="padding: 10px; width: 100%; max-width: 300px;"
                >
                <button 
                    id="buscarBtn" 
                    style="width:100px;height:48px;padding: 10px 20px; background-color: red; color: white; border: none; border-radius: 5px; cursor: pointer;font-size:20px;"
                >
                    Buscar
                </button>
            </div>
        `;
        const input = this.querySelector('#buscador');
        const button = this.querySelector('#buscarBtn');
        const filtrar = () => {
            const valor = input.value.toLowerCase();
            const container = document.querySelector('circuit-container');
            if (container) {
                container.filterByName(valor);
            }
        };
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') filtrar();
        });
        button.addEventListener('click', filtrar);
    }
}

customElements.define('circuit-search', CircuitSearch);
