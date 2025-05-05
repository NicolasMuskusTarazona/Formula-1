export function generateWeather() {
    const options = ['Seco', 'Lluvioso', 'Extremo'];
    const index = Math.floor(Math.random() * options.length);
    return options[index];
}
