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
    imagen: "https://p.turbosquid.com/ts-thumb/My/iCUpeJ/fo/w15_0000/jpg/1715059275/600x600/fit_q87/3adf4842787e20b8fab6f8f2363158b70b2ac1af/w15_0000.jpg"
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
  },
  {
    equipo: "Williams",
    modelo: "FW46",
    motor: "Mercedes",
    velocidad_maxima_kmh: 340,
    aceleracion_0_100: 2.9,
    pilotos: [9, 10],
    rendimiento: {
      conduccion_normal: {
        velocidad_promedio_kmh: 305,
        consumo_combustible: { seco: 2.2, lluvioso: 2.4, extremo: 2.6 },
        desgaste_neumaticos: { seco: 1.7, lluvioso: 1.0, extremo: 2.6 }
      },
      conduccion_agresiva: {
        velocidad_promedio_kmh: 325,
        consumo_combustible: { seco: 2.7, lluvioso: 3.0, extremo: 3.3 },
        desgaste_neumaticos: { seco: 2.4, lluvioso: 1.5, extremo: 3.8 }
      },
      ahorro_combustible: {
        velocidad_promedio_kmh: 285,
        consumo_combustible: { seco: 1.8, lluvioso: 2.0, extremo: 2.2 },
        desgaste_neumaticos: { seco: 1.2, lluvioso: 0.7, extremo: 1.9 }
      }
    },
    imagen: "https://www.renderhub.com/cactus3d/f1-williams-fw46-2024/f1-williams-fw46-2024-01.jpg"
  },
  {
    equipo: "Haas",
    modelo: "VF-24",
    motor: "Ferrari",
    velocidad_maxima_kmh: 335,
    aceleracion_0_100: 2.9,
    pilotos: [11, 12],
    rendimiento: {
      conduccion_normal: {
        velocidad_promedio_kmh: 300,
        consumo_combustible: { seco: 2.3, lluvioso: 2.5, extremo: 2.8 },
        desgaste_neumaticos: { seco: 1.8, lluvioso: 1.1, extremo: 2.9 }
      },
      conduccion_agresiva: {
        velocidad_promedio_kmh: 320,
        consumo_combustible: { seco: 2.8, lluvioso: 3.1, extremo: 3.6 },
        desgaste_neumaticos: { seco: 2.5, lluvioso: 1.7, extremo: 4.0 }
      },
      ahorro_combustible: {
        velocidad_promedio_kmh: 280,
        consumo_combustible: { seco: 1.9, lluvioso: 2.1, extremo: 2.4 },
        desgaste_neumaticos: { seco: 1.3, lluvioso: 0.9, extremo: 2.2 }
      }
    },
    imagen: "https://www.renderhub.com/cactus3d/f1-haas-vf-24-2024/f1-haas-vf-24-2024-01.jpg"
  },
  {
    equipo: "Aston Martin",
    modelo: "AMR24",
    motor: "Mercedes",
    velocidad_maxima_kmh: 350,
    aceleracion_0_100: 2.7,
    pilotos: [13, 14],
    rendimiento: {
      conduccion_normal: {
        velocidad_promedio_kmh: 310,
        consumo_combustible: { seco: 2.1, lluvioso: 2.3, extremo: 2.6 },
        desgaste_neumaticos: { seco: 1.6, lluvioso: 0.9, extremo: 2.6 }
      },
      conduccion_agresiva: {
        velocidad_promedio_kmh: 330,
        consumo_combustible: { seco: 2.6, lluvioso: 2.9, extremo: 3.3 },
        desgaste_neumaticos: { seco: 2.3, lluvioso: 1.5, extremo: 3.9 }
      },
      ahorro_combustible: {
        velocidad_promedio_kmh: 290,
        consumo_combustible: { seco: 1.7, lluvioso: 1.9, extremo: 2.2 },
        desgaste_neumaticos: { seco: 1.1, lluvioso: 0.6, extremo: 1.8 }
      }
    },
    imagen: "https://p.turbosquid.com/ts-thumb/dV/0kf54j/Y3/amr4_0000/jpg/1709274661/600x600/fit_q87/cd79635aa6515936dc35bce6f277043047a3ecde/amr4_0000.jpg"
  },
  {
    equipo: "Racing Bulls",
    modelo: "VCARB01",
    motor: "Honda RBPT",
    velocidad_maxima_kmh: 340,
    aceleracion_0_100: 2.8,
    pilotos: [15, 16],
    rendimiento: {
      conduccion_normal: {
        velocidad_promedio_kmh: 305,
        consumo_combustible: { seco: 2.2, lluvioso: 2.4, extremo: 2.7 },
        desgaste_neumaticos: { seco: 1.7, lluvioso: 1.1, extremo: 2.8 }
      },
      conduccion_agresiva: {
        velocidad_promedio_kmh: 325,
        consumo_combustible: { seco: 2.8, lluvioso: 3.1, extremo: 3.5 },
        desgaste_neumaticos: { seco: 2.4, lluvioso: 1.6, extremo: 4.0 }
      },
      ahorro_combustible: {
        velocidad_promedio_kmh: 285,
        consumo_combustible: { seco: 1.9, lluvioso: 2.1, extremo: 2.3 },
        desgaste_neumaticos: { seco: 1.3, lluvioso: 0.8, extremo: 2.1 }
      }
    },
    imagen: "https://www.raceland.eu/$WS/raceland/websale8_shop-raceland/produkte/medien/bilder/gross/20-39521.jpg"
  },
  {
    equipo: "Alpine",
    modelo: "A524",
    motor: "Renault",
    velocidad_maxima_kmh: 345,
    aceleracion_0_100: 2.8,
    pilotos: [17, 18],
    rendimiento: {
      conduccion_normal: {
        velocidad_promedio_kmh: 310,
        consumo_combustible: { seco: 2.2, lluvioso: 2.5, extremo: 2.8 },
        desgaste_neumaticos: { seco: 1.6, lluvioso: 1.0, extremo: 2.7 }
      },
      conduccion_agresiva: {
        velocidad_promedio_kmh: 330,
        consumo_combustible: { seco: 2.7, lluvioso: 3.0, extremo: 3.4 },
        desgaste_neumaticos: { seco: 2.4, lluvioso: 1.5, extremo: 3.8 }
      },
      ahorro_combustible: {
        velocidad_promedio_kmh: 290,
        consumo_combustible: { seco: 1.8, lluvioso: 2.0, extremo: 2.3 },
        desgaste_neumaticos: { seco: 1.2, lluvioso: 0.7, extremo: 2.0 }
      }
    },
    imagen: "https://p.turbosquid.com/ts-thumb/Ya/otN6eu/LE/turbosquid_preview/jpg/1707394178/600x600/fit_q87/850f5b5bdc3126c0881473cde13e23636dc5e957/turbosquid_preview.jpg"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('vehiculos');
  const comparados = [];
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("mejorVehiculoDetalles");
  const closeModal = document.querySelector(".close");
  
  if (!container) {
    console.error('Contenedor #vehiculos no encontrado');
    return;
  }
  
  container.filterByName = (valor) => {
    const cards = container.querySelectorAll('.card');
    cards.forEach(card => {
      const modelo = card.querySelector('h3').textContent.toLowerCase();
      if (modelo.includes(valor.toLowerCase())) {
        card.style.display = ''; 
      } else {
        card.style.display = 'none'; 
      }
    });
  };

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
      <button class="boton-comprar">Comparar</button>
    </div>
  `;
  
    
    card.querySelector('.toggle-btn').addEventListener('click', (e) => {
      const detallesDiv = card.querySelector(`#${detallesID}`);
      const boton = e.target;
  
      if (detallesDiv.style.display === "none" || detallesDiv.style.display === "") {
        if (detallesDiv.innerHTML.trim() === "") {
          detallesDiv.innerHTML = Object.entries(v.rendimiento).map(([modo, datos]) =>
             `
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

    card.querySelector('.boton-comprar').addEventListener('click', () => {
      if (!comparados.includes(v)) {
        comparados.push(v);
        alert(`${v.modelo} ha sido agregado a la comparación`);
      } else {
        alert(`${v.modelo} ya está en la lista de comparación`);
      }

      if (comparados.length > 1) {
        const mejorVehiculo = comparados.reduce((mejor, actual) => {
          const comparar = (mejor, actual) => {
            if (actual.velocidad_maxima_kmh > mejor.velocidad_maxima_kmh) return actual;
            if (actual.aceleracion_0_100 < mejor.aceleracion_0_100) return actual;
            if (actual.rendimiento.conduccion_normal.consumo_combustible.seco < mejor.rendimiento.conduccion_normal.consumo_combustible.seco) return actual;
            if (actual.rendimiento.conduccion_normal.desgaste_neumaticos.seco < mejor.rendimiento.conduccion_normal.desgaste_neumaticos.seco) return actual;
            return mejor;
          };
  
          return comparar(mejor, actual);
        });
  
        alert(`El mejor vehículo es: ${mejorVehiculo.modelo} con las siguientes características:
        - Velocidad máxima: ${mejorVehiculo.velocidad_maxima_kmh} km/h
        - Aceleración 0-100 km/h: ${mejorVehiculo.aceleracion_0_100}s
        - Consumo de combustible (Seco): ${mejorVehiculo.rendimiento.conduccion_normal.consumo_combustible.seco} L/km
        - Desgaste de neumáticos (Seco): ${mejorVehiculo.rendimiento.conduccion_normal.desgaste_neumaticos.seco}`);
      }
    });
  
    container.appendChild(card);
  });
  });