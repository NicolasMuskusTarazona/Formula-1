// Al inicio de qualifying.js
import { pilotosAdmin } from './pilotosData.js';

// Ahora puedes almacenar en el localStorage
localStorage.setItem("pilotosAdmin", JSON.stringify(pilotosAdmin));

document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("startSimulation");
    const weatherDiv = document.getElementById("weatherCondition");
    const tableBody = document.querySelector("#resultsTable tbody");

    const WEATHER_TYPES = ["Soleado", "Nublado", "Lluvia"];
    const STORAGE_KEYS_PILOTOS = "pilotosAdmin";

    startBtn.addEventListener("click", () => {
        const pilotos = JSON.parse(localStorage.getItem(STORAGE_KEYS_PILOTOS)) || [];

        if (pilotos.length === 0) {
            alert("No hay pilotos para simular.");
            return;
        }

        const weather = WEATHER_TYPES[Math.floor(Math.random() * WEATHER_TYPES.length)];
        weatherDiv.textContent = `Clima actual: ${weather}`;

        const pilotosConTiempos = pilotos.map(piloto => {
            let tiempoBase = 75 + Math.random() * 10; // tiempo base entre 75 y 85

            // Penalización por clima
            if (weather === "Lluvia") tiempoBase += 5;
            if (weather === "Nublado") tiempoBase += 2;

            return {
                nombre: piloto.nombre,
                tiempo: parseFloat(tiempoBase.toFixed(3))
            };
        });

        // Ordenar por tiempo
        pilotosConTiempos.sort((a, b) => a.tiempo - b.tiempo);

        // Mostrar resultados
        tableBody.innerHTML = "";
        pilotosConTiempos.forEach((piloto, index) => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${index + 1}</td>
                <td>${piloto.nombre}</td>
                <td>${piloto.tiempo} s</td>
            `;
            tableBody.appendChild(fila);
        });
    });
});
