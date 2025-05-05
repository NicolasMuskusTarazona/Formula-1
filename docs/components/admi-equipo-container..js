class TeamContainerAdmin extends HTMLElement {
  constructor() {
    super();
    this.allData = [];
    this.pilotos = [];
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      h1 {
        text-align: center;
        color: black;
        margin-bottom: 40px;
        margin-top: 40px;
        font-size: 50px;
      }

        #addTeamBtn {
          background-color: #e10600;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 10px;
          margin-bottom: 10px;
          cursor: pointer;
        }

        #searchInput {
          padding: 10px;
          width: 60%;
          margin-bottom: 20px;
          border-radius: 8px;
          border: 1px solid #ccc;
        }

        .teams {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
          
        }
      </style>

      <button id="addTeamBtn">Agregar Equipo</button>
      <input type="text" id="searchInput" placeholder="Buscar equipo o piloto" />
      <section class="teams"></section>
      <div id="formContainer"></div>
    `;

    this.loadDataFromLocalStorage();

    this.querySelector('#addTeamBtn').addEventListener('click', () => {
      this.showForm();
    });

    this.querySelector('#searchInput').addEventListener('input', e => {
      this.filterByName(e.target.value);
    });
  }

  loadDataFromLocalStorage() {
    const equiposGuardados = JSON.parse(localStorage.getItem('equiposAdmin')) || [];
    const pilotosGuardados = JSON.parse(localStorage.getItem('pilotosAdmin')) || [];
    this.pilotos = pilotosGuardados;
    this.renderData(equiposGuardados, pilotosGuardados);
  }

  renderData(data, pilotos) {
    this.allData = data;
    this.pilotos = pilotos;
    this._renderList(data);
  }

  filterByName(valor) {
    const filtro = valor.toLowerCase().trim();
    if (!filtro) {
      this._renderList(this.allData);
      return;
    }
    const filtrados = this.allData.filter(equipo => {
      const nombreEquipo = equipo.nombre.toLowerCase();
      const pilotosEquipo = equipo.pilotos
        .map(id => this.pilotos.find(p => p.id === id)?.nombre.toLowerCase())
        .join(' ');
      return nombreEquipo.includes(filtro) || pilotosEquipo.includes(filtro);
    });
    this._renderList(filtrados);
  }

  _renderList(data) {
    const section = this.querySelector('.teams');
    section.innerHTML = '';

    if (data.length === 0) {
      section.innerHTML = `<p style="color: red; font-size: 20px;">No se encontraron equipos con ese nombre o piloto.</p>`;
      return;
    }

    data.forEach((eq, index) => {
      const pilotosHTML = eq.pilotos.map(id => {
        const piloto = this.pilotos.find(p => p.id === id);
        return piloto ? `<li>${piloto.nombre} (${piloto.rol})</li>` : '';
      }).join('');

      const equipoElement = document.createElement('article');
      equipoElement.classList.add('team');
      
      equipoElement.innerHTML = `
        <style>
          .team {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            width: 100%;
            margin: 20px 0;
          }
      
          .team h2 {
            color: black;
            font-size: 24px;
            font-weight: bold;
            margin: 0;
          }
      
          .button-group {
            display: flex;
            gap: 10px;
          }
      
          .team button {
            background-color: red;
            color: white;
            border: none;
            padding: 8px 12px;
            cursor: pointer;
            border-radius: 5px;
            font-size: 14px;
          }
      
          .team button:hover {
            background-color: darkred;
          }
      
          .team a {
            color: white;
            text-decoration: none;
          }
        </style>
      
        <h2>${eq.nombre}</h2>
        <div class="button-group">
          <button class="deleteBtn">Eliminar</button>
          <button class="editBtn"><a href="#pilotosCheckboxes">Editar</a></button>
        </div>
      `;
      
      // Agregar el elemento `equipoElement` al contenedor adecuado
      section.appendChild(equipoElement);

      // Eventos de los botones de eliminar y editar
      equipoElement.querySelector('.deleteBtn').addEventListener('click', () => this.deleteEquipo(index));
      equipoElement.querySelector('.editBtn').addEventListener('click', () => this.editEquipo(index, eq));
    });
  }

  deleteEquipo(index) {
    if (confirm('¿Seguro que quieres eliminar este equipo?')) {
      this.allData.splice(index, 1);
      this.updateLocalStorage();
      this._renderList(this.allData);
    }
  }

  editEquipo(index, equipo) {
    const formContainer = this.querySelector('#formContainer');
    formContainer.innerHTML = this._getFormHTML(equipo);

    const form = formContainer.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(form);
      const updatedEquipo = {
        nombre: formData.get('nombre').trim(),
        pais: formData.get('pais').trim(),
        motor: formData.get('motor').trim(),
        pilotos: Array.from(form.querySelectorAll('input[name="pilotos"]:checked')).map(input => parseInt(input.value)),
        imagen: formData.get('imagen').trim(),
        carro: formData.get('carro').trim()
      };

      this.allData[index] = updatedEquipo;
      this.updateLocalStorage();
      this._renderList(this.allData);
      formContainer.innerHTML = '';
    });

    form.querySelector('#cancelBtn').addEventListener('click', () => {
      formContainer.innerHTML = '';
    });
  }

  updateLocalStorage() {
    localStorage.setItem('equiposAdmin', JSON.stringify(this.allData));
  }

  _getFormHTML(equipo = {}) {
    const nombre = equipo.nombre || '';
    const pais = equipo.pais || '';
    const motor = equipo.motor || '';
    const imagen = equipo.imagen || '';
    const carro = equipo.carro || '';
    const pilotosSeleccionados = equipo.pilotos || [];

    const pilotosCheckboxes = this.pilotos.map(p => `
      <label class="checkbox-label">
        <input type="checkbox" name="pilotos" value="${p.id}" ${pilotosSeleccionados.includes(p.id) ? 'checked' : ''} />
        ${p.nombre} (${p.rol})
      </label>
    `).join('');

    return `
    <style>
      form {
        background-color: #111;
        color: #fff;
        padding: 20px;
        border-radius: 15px;
        max-width: 500px; 
        font-family: 'Arial', sans-serif;
        box-shadow: 0 0 10px rgba(255,0,0,0.4);
      }

      label {
        display: block;
        margin-bottom: 12px;
        font-size: 15px;
      }

      input[type="text"],
      input[type="url"] {
        width: 100%;
        padding: 8px;
        margin-top: 5px;
        border-radius: 8px;
        border: 1px solid #ccc;
        background-color: #222;
        color: white;
      }

      .checkbox-label {
        display: block;
        margin-bottom: 10px;
        font-size: 14px;
      }

      button {
        background-color: #e10600;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
      }
    </style>
    <form>
      <label for="nombre">Nombre del Equipo:</label>
      <input type="text" id="nombre" name="nombre" value="${nombre}" required />

      <label for="pais">País:</label>
      <input type="text" id="pais" name="pais" value="${pais}" required />

      <label for="motor">Motor:</label>
      <input type="text" id="motor" name="motor" value="${motor}" required />

      <label for="pilotos">Pilotos:</label>
      ${pilotosCheckboxes}

      <label for="imagen">Imagen del Logo:</label>
      <input type="url" id="imagen" name="imagen" value="${imagen}" required />

      <label for="carro">Imagen del Carro:</label>
      <input type="url" id="carro" name="carro" value="${carro}" required />

      <div>
        <button type="submit">Guardar</button>
        <button type="button" id="cancelBtn">Cancelar</button>
      </div>
    </form>
    `;
  }

  showForm() {
    const formContainer = this.querySelector('#formContainer');
    formContainer.innerHTML = this._getFormHTML();

    const form = formContainer.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(form);
      const nuevoEquipo = {
        nombre: formData.get('nombre').trim(),
        pais: formData.get('pais').trim(),
        motor: formData.get('motor').trim(),
        pilotos: Array.from(form.querySelectorAll('input[name="pilotos"]:checked')).map(input => parseInt(input.value)),
        imagen: formData.get('imagen').trim(),
        carro: formData.get('carro').trim()
      };

      this.allData.push(nuevoEquipo);

      this.updateLocalStorage();
      this._renderList(this.allData);

      formContainer.innerHTML = '';
    });

    form.querySelector('#cancelBtn').addEventListener('click', () => {
      formContainer.innerHTML = '';
    });
  }
}

customElements.define('team-container-admin', TeamContainerAdmin);
