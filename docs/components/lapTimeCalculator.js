export function calculateLapTime(pilot, weather) {
    const baseTime = 90 + Math.random() * 10; // Tiempo base aleatorio
    let modifier = 1;

    if (weather === 'Lluvioso') modifier = 1.05;
    if (weather === 'Extremo') modifier = 1.15;

    const carAdjustment = pilot.configuracion?.ajuste || 1;

    return (baseTime * modifier * carAdjustment).toFixed(3);
}
