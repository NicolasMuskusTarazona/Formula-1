class CircuitSearch extends HTMLElement {
    constructor() {
      super()
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px; margin-left: 12px;">
          <input 
            type="text" 
            id="buscador" 
            placeholder="Nombre a buscar..."
          >
          <button 
            id="buscarBtn"
            class="buscar-btn"
          >
            Buscar
          </button>
        </div>
      `
  
      const input = this.querySelector('#buscador')
      const button = this.querySelector('#buscarBtn')
  
      const filtrar = () => {
        const valor = input.value.toLowerCase()
        const container = document.querySelector('#vehiculos')
        if (container && typeof container.filterByName === 'function') {
          container.filterByName(valor)
        }
      }
  
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') filtrar()
      })
  
      button.addEventListener('click', filtrar)
    }
  }
  
  customElements.define('circuit-search', CircuitSearch)