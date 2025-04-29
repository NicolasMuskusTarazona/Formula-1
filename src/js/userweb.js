const data = {
    drivers: {
      title: "Pilotos",
      text: "Los corredores más destacados.",
      img: "../storage/img/piloto-mini.webp",
    },
    vehicles: {
      title: "Vehículos",
      text: "Explora autos de última generación.",
      img: "../storage/img/vehiculo-mini.webp",
    },
    tracks: {
      title: "Circuitos",
      text: "Descubre los trazados más épicos.",
      img: "../storage/img/circuito-mini.webp",
    },
    race: {
      title: "Simulación",
      text: "Corre en tiempo real como en la F1.",
      img: "../storage/img/simulacion-mini.webp",
    },
  };
  
  document.querySelectorAll(".menu button").forEach((button) => {
    const type = button.getAttribute("data-tooltip");
    const content = data[type];
    const tooltip = button.querySelector(".mini-page");
  
    if (tooltip && content) {
      tooltip.innerHTML = `
          <strong>${content.title}</strong>
          <p>${content.text}</p>
          <img src="${content.img}" alt="${content.title}" />
        `;
    }
  });
  