const vehiculos = [
    {
      equipo: "Red Bull Racing",
      modelo: "RB20",
      motor: "Honda",
      velocidad_maxima_kmh: 360,
      aceleracion_0_100: 2.5,
      pilotos: [1, 2],
      rendimiento: {
        conduccion_normal: {
          velocidad_promedio_kmh: 320,
          consumo_combustible: { seco: 1.9, lluvioso: 2.1, extremo: 2.4 },
          desgaste_neumaticos: { seco: 1.5, lluvioso: 0.8, extremo: 2.5 }
        },
        conduccion_agresiva: {
          velocidad_promedio_kmh: 340,
          consumo_combustible: { seco: 2.4, lluvioso: 2.6, extremo: 3.0 },
          desgaste_neumaticos: { seco: 2.2, lluvioso: 1.2, extremo: 3.5 }
        },
        ahorro_combustible: {
          velocidad_promedio_kmh: 300,
          consumo_combustible: { seco: 1.6, lluvioso: 1.8, extremo: 2.1 },
          desgaste_neumaticos: { seco: 1.0, lluvioso: 0.5, extremo: 1.8 }
        }
      },
      imagen: "https://cdn-7.motorsport.com/images/amp/0a98yMX0/s6/red-bull-racing-rb20.jpg"
    },
    {
      equipo: "Mercedes-AMG Petronas",
      modelo: "W15",
      motor: "Mercedes",
      velocidad_maxima_kmh: 355,
      aceleracion_0_100: 2.6,
      pilotos: [3, 4],
      rendimiento: {
        conduccion_normal: {
          velocidad_promedio_kmh: 315,
          consumo_combustible: { seco: 2.0, lluvioso: 2.2, extremo: 2.5 },
          desgaste_neumaticos: { seco: 1.6, lluvioso: 0.9, extremo: 2.6 }
        },
        conduccion_agresiva: {
          velocidad_promedio_kmh: 335,
          consumo_combustible: { seco: 2.6, lluvioso: 2.8, extremo: 3.2 },
          desgaste_neumaticos: { seco: 2.3, lluvioso: 1.4, extremo: 3.8 }
        },
        ahorro_combustible: {
          velocidad_promedio_kmh: 295,
          consumo_combustible: { seco: 1.7, lluvioso: 1.9, extremo: 2.2 },
          desgaste_neumaticos: { seco: 1.1, lluvioso: 0.6, extremo: 1.9 }
        }
      },
      imagen: "https://www.raceland.eu/$WS/raceland/websale8_shop-raceland/produkte/medien/bilder/normal/20-17977.jpg"
    },
    {
      equipo: "Ferrari",
      modelo: "SF23",
      motor: "Ferrari",
      velocidad_maxima_kmh: 350,
      aceleracion_0_100: 2.7,
      pilotos: [5, 6],
      rendimiento: {
        conduccion_normal: {
          velocidad_promedio_kmh: 310,
          consumo_combustible: { seco: 2.1, lluvioso: 2.3, extremo: 2.7 },
          desgaste_neumaticos: { seco: 1.7, lluvioso: 1.0, extremo: 2.8 }
        },
        conduccion_agresiva: {
          velocidad_promedio_kmh: 330,
          consumo_combustible: { seco: 2.7, lluvioso: 3.0, extremo: 3.5 },
          desgaste_neumaticos: { seco: 2.5, lluvioso: 1.6, extremo: 4.0 }
        },
        ahorro_combustible: {
          velocidad_promedio_kmh: 290,
          consumo_combustible: { seco: 1.8, lluvioso: 2.0, extremo: 2.4 },
          desgaste_neumaticos: { seco: 1.2, lluvioso: 0.7, extremo: 2.0 }
        }
      },
      imagen: "https://images.footballfanatics.com/scuderia-ferrari/scuderai-ferrari-sf23-no16-monaco-gp-charles-leclerc-1:43-looksmart-model_ss5_p-200370407+pv-1+u-pm6mdiueljifgonqtdlk+v-ovyepy7vdglc7gec2clm.jpg?_hv=2&w=900"
    },
    {
      equipo: "McLaren",
      modelo: "MCL36",
      motor: "Mercedes",
      velocidad_maxima_kmh: 345,
      aceleracion_0_100: 2.8,
      pilotos: [7, 8],
      rendimiento: {
        conduccion_normal: {
          velocidad_promedio_kmh: 325,
          consumo_combustible: { seco: 2.0, lluvioso: 2.3, extremo: 2.6 },
          desgaste_neumaticos: { seco: 1.6, lluvioso: 1.1, extremo: 2.7 }
        },
        conduccion_agresiva: {
          velocidad_promedio_kmh: 340,
          consumo_combustible: { seco: 2.5, lluvioso: 2.8, extremo: 3.3 },
          desgaste_neumaticos: { seco: 2.2, lluvioso: 1.4, extremo: 3.9 }
        },
        ahorro_combustible: {
          velocidad_promedio_kmh: 300,
          consumo_combustible: { seco: 1.7, lluvioso: 1.9, extremo: 2.3 },
          desgaste_neumaticos: { seco: 1.1, lluvioso: 0.8, extremo: 2.1 }
        }
      },
      imagen: "https://p.turbosquid.com/ts-thumb/oc/3GrsVt/tJ/mcl60_0000_1200/jpg/1679300174/300x300/sharp_fit_q85/96fce7fc27069cb982363d6ca81746b3b99e4cf2/mcl60_0000_1200.jpg"
    }
  ];
  
  
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('vehiculos');
  
    if (!container) {
      console.error('Contenedor #vehiculos no encontrado');
      return;
    }
  
    vehiculos.forEach(v => {
      const card = document.createElement('div');
      card.className = 'card';
  
      const detallesID = `detalles-${v.modelo.replace(/\s+/g, '-')}`;
  
      card.innerHTML = `
        <img src="${v.imagen}" alt="${v.modelo}">
        <div class="card-content">
          <h3>${v.modelo} - ${v.equipo}</h3>
          <p><strong>Motor:</strong> ${v.motor}</p>
          <p><strong>Velocidad Máx:</strong> ${v.velocidad_maxima_kmh} km/h</p>
          <p><strong>0-100 km/h:</strong> ${v.aceleracion_0_100}s</p>
          <button class="toggle-btn" data-id="${detallesID}">Ver Rendimiento</button>
          <div class="details" id="${detallesID}" style="display: none;"></div>
        </div>
      `;
        card.querySelector('.toggle-btn').addEventListener('click', (e) => {
        const detallesDiv = card.querySelector(`#${detallesID}`);
        const boton = e.target;
  
        if (detallesDiv.style.display === "none" || detallesDiv.style.display === "") {
          if (detallesDiv.innerHTML.trim() === "") {
            detallesDiv.innerHTML = Object.entries(v.rendimiento).map(([modo, datos]) => `
              <h4>${modo.replace("_", " ").toUpperCase()}</h4>
              <p>Velocidad promedio: ${datos.velocidad_promedio_kmh} km/h</p>
              <p>Combustible (Seco): ${datos.consumo_combustible.seco} L/km</p>
              <p>Neumáticos (Seco): ${datos.desgaste_neumaticos.seco}</p>
            `).join('');
          }
          detallesDiv.style.display = "block";
          boton.textContent = "Ocultar Rendimiento";
        } else {
          detallesDiv.style.display = "none";
          boton.textContent = "Ver Rendimiento";
        }
      });
  
      container.appendChild(card);
    });
  });
  