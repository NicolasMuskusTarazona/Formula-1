const pilotos = [
    { 
        nombre: "Max Verstappen",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/verstappen",
        equipo: "Red Bull Racing",
        logo: "https://i.pinimg.com/originals/51/0c/07/510c07f646e06fbda90f4eb522425e4f.jpg",
        estadisticas: {
            campeonatos: 2,
            victorias: 40,
            podios: 80,
            poles: 20
        }
    },
    {
        nombre: "Yuki Tsunoda",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/tsunoda",
        equipo: "AlphaTauri",
        logo: "https://external-preview.redd.it/7fW_kMYXlBMW2hCp-0SOK5vdlSpc57U50tK6ZyOzGPo.jpg?auto=webp&s=faa99261816d162c70214a897c89f41c606dad3c",
        estadisticas: {
            campeonatos: 0,
            victorias: 1,
            podios: 5,
            poles: 0
        }
    },
    {
        nombre: "George Russell",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/russell",
        equipo: "Mercedes",
        logo: "https://i.pinimg.com/564x/85/18/d6/8518d67550b932cbd6bcd159719d41f2.jpg",
        estadisticas: {
            campeonatos: 0,
            victorias: 3,
            podios: 10,
            poles: 5
        }
    },
    { 
        nombre: "Andrea Antonelli",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/antonelli",
        equipo: "Alfa Romeo",
        logo: "https://1000marcas.net/wp-content/uploads/2019/12/Alfa-Romeo-logotipo.jpg",
        estadisticas: {
            campeonatos: 0,
            victorias: 0,
            podios: 2,
            poles: 1
        }
    },
    {
        nombre: "Charles Leclerc",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/leclerc",
        logo: "https://i.pinimg.com/736x/28/36/b0/2836b01c6580691ecc6919ba6bcb1e41.jpg",
        equipo: "Ferrari",
        estadisticas: {
            campeonatos: 0,
            victorias: 10,
            podios: 40,
            poles: 10
        }
    },
    { 
        nombre: "Lewis Hamilton",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/hamilton",
        equipo: "Mercedes",
        logo: "https://i.pinimg.com/736x/53/a8/46/53a8466e6e4d0af16e6b6c0633e7cd4f.jpg",    
        estadisticas: {
            campeonatos: 7,
            victorias: 103,
            podios: 180,
            poles: 70
        }
    },
    { 
        nombre: "Oscar Piastri",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/piastri",
        equipo: "McLaren",
        logo: "https://cdn.worldvectorlogo.com/logos/mclaren.svg",
        estadisticas: {
            campeonatos: 0,
            victorias: 0,
            podios: 2,
            poles: 1
        }
    },
    { 
        nombre: "Lando Norris",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/norris",
        equipo: "McLaren",
        logo: "https://cdn.worldvectorlogo.com/logos/mclaren.svg",
        estadisticas: {
            campeonatos: 0,
            victorias: 0,
            podios: 10,
            poles: 2
        }
    },
    {
        nombre: "Lance Stroll",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/stroll",
        equipo: "Aston Martin",
        logo: "https://brandemia.org/contenido/subidas/2022/07/1-2-1024x572.png",
        estadisticas: {
            campeonatos: 0,
            victorias: 1,
            podios: 5,
            poles: 0
        }
    },
    { 
        nombre: "Fernando Alonso",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/alonso",
        equipo: "Aston Martin",
        logo: "https://brandemia.org/contenido/subidas/2022/07/1-2-1024x572.png",
        estadisticas: {
            campeonatos: 2,
            victorias: 32,
            podios: 100,
            poles: 22
        }
    },
    { 
        nombre: "Pierre Gasly",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/gasly",
        equipo: "Alpine",
        logo: "https://hips.hearstapps.com/hmg-prod/images/et3dwsmxuam3is8-1612973513.jpg",
        estadisticas: {
            campeonatos: 0,
            victorias: 1,
            podios: 5,
            poles: 1
        }
    },
    { 
        nombre: "Jack Doohan",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/doohan",
        equipo: "Alpine",
        logo: "https://hips.hearstapps.com/hmg-prod/images/et3dwsmxuam3is8-1612973513.jpg",
        estadisticas: {
            campeonatos: 0,
            victorias: 0,
            podios: 1,
            poles: 0
        }
    },
    { 
        nombre: "Nico Hülkenberg",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/hulkenberg",
        equipo: "Haas",
        logo: "https://i.pinimg.com/736x/28/36/b0/2836b01c6580691ecc6919ba6bcb1e41.jpg",
        estadisticas: {
            campeonatos: 0,
            victorias: 0,
            podios: 0,
            poles: 0
        }
    },
    { 
        nombre: "Gustavo Bortoleto",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/bortoleto",
        equipo: "Aston Martin",
        logo: "https://brandemia.org/contenido/subidas/2022/07/1-2-1024x572.png",
        estadisticas: {
            campeonatos: 0,
            victorias: 0,
            podios: 0,
            poles: 0
        }
    },
    { 
        nombre: "Esteban Ocon",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/ocon",
        equipo: "Alpine",
        logo: "https://hips.hearstapps.com/hmg-prod/images/et3dwsmxuam3is8-1612973513.jpg   ",
        estadisticas: {
            campeonatos: 0,
            victorias: 1,
            podios: 5,
            poles: 0
        }
    },
    { 
        nombre: "Benjamin Bearman",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/bearman",
        equipo: "Haas",
        logo: "https://i.pinimg.com/736x/28/36/b0/2836b01c6580691ecc6919ba6bcb1e41.jpg",
        estadisticas: {
            campeonatos: 0,
            victorias: 0,
            podios: 0,
            poles: 0
        }
    },
    {
        nombre: "Liam Lawson",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/fom-website/drivers/2025Drivers/lawson-racing-bulls",
        equipo: "AlphaTauri",
        logo: "https://external-preview.redd.it/7fW_kMYXlBMW2hCp-0SOK5vdlSpc57U50tK6ZyOzGPo.jpg?auto=webp&s=faa99261816d162c70214a897c89f41c606dad3c",
        estadisticas: {
            campeonatos: 0,
            victorias: 0,
            podios: 0,
            poles: 0
        }
    },
    { 
        nombre: "Isaac Hadjar",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/hadjar",
        equipo: "AlphaTauri",
        logo: "https://external-preview.redd.it/7fW_kMYXlBMW2hCp-0SOK5vdlSpc57U50tK6ZyOzGPo.jpg?auto=webp&s=faa99261816d162c70214a897c89f41c606dad3c",
        estadisticas: {
            campeonatos: 0,
            victorias: 0,
            podios: 0,
            poles: 0
        }
    },
    { 
        nombre: "Alex Albon",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/albon",
        equipo: "Williams",
        logo: "https://i.pinimg.com/564x/85/18/d6/8518d67550b932cbd6bcd159719d41f2.jpg",
        estadisticas: {
            campeonatos: 0,
            victorias: 0,
            podios: 1,
            poles: 0
        }
    },
    { 
        nombre: "Carlos Sainz",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/sainz",
        equipo: "Ferrari",
        logo: "https://dbdzm869oupei.cloudfront.net/img/sticker/preview/2251.png",
        estadisticas: {
            campeonatos: 0,
            victorias: 1,
            podios: 10,
            poles: 2
        }
    }
];


const contenedor = document.getElementById("Pilotos");

pilotos.forEach(eq => {
  const carta = document.createElement("div");
  carta.className = "carta-equipo";
  carta.innerHTML = `
    <div class="carta-inner">
      <div class="carta-front">
        <img src="${eq.imagen}" alt="${eq.nombre}" />
      </div>
      <div class="carta-back">
       <div class="piloto-nombre">
        <h3>${eq.nombre}</h3>
        <img src="${eq.logo}" alt="Logo equipo" class="logo-equipo">
        </div>
        <img src="${eq.imagen}" class="logo-equipo">
        <p style="text-align: center;">${eq.equipo}</p>

        <div class="estadisticas-circulares">
          ${Object.entries(eq.estadisticas || {}).map(([clave, valor]) => `
            <div class="circulo">
              <svg>
                <circle cx="30" cy="30" r="25"></circle>
                <circle cx="30" cy="30" r="25" style="--valor:${valor}"></circle>
              </svg>
              <div class="dato">${valor}</div>
              <small>${clave}</small>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
  contenedor.appendChild(carta);
});
