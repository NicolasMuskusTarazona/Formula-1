import { generateWeather } from './weatherGenerator.js';
import { calculateLapTime } from './lapTimeCalculator.js';
import { saveResults } from './resultsStorage.js';
import { pilotosAdmin } from './pilotosData.js'; // Asegúrate de exportarlo desde aquí

// Factor de ajuste por rol
const ajustePorRol = {
    "Líder": 0.98,
    "Escudero": 1.02
};

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("startSimulation");
    const tableBody = document.querySelector("#resultsTable tbody");
    const weatherBox = document.getElementById("weatherCondition");

    btn.addEventListener("click", () => {
        const weather = generateWeather();
        weatherBox.textContent = `Condición Climática: ${weather}`;

        const resultados = pilotosAdmin.map(p => {
            const ajuste = ajustePorRol[p.rol] || 1;
            const tiempo = parseFloat(calculateLapTime({ configuracion: { ajuste } }, weather));
            return {
                piloto: p.nombre,
                equipo: p.equipo,
                tiempo,
                foto: p.foto
            };
        });

        resultados.sort((a, b) => a.tiempo - b.tiempo);

        tableBody.innerHTML = "";
        resultados.forEach((res, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>
                    <img src="${res.foto}" alt="${res.piloto}" width="50">
                    <div>
                        <strong>${res.piloto}</strong><br>
                        <small>${res.equipo}</small>
                    </div>
                </td>
                <td>${res.tiempo}s</td>
            `;
            tableBody.appendChild(row);
        });

        saveResults({
            fecha: new Date().toLocaleString(),
            clima: weather,
            resultados
        });
    });
});
