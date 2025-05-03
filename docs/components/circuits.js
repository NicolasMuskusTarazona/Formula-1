// Import
import '../components/circuit-container.js';
import '../components/circuit-search.js'
// Datos
export const climaPorCircuitoView = {
    Monaco: "Seco",
    Silverstone: "Lluvioso",
    SpaFrancorchamps: "Extremo",
    Monza: "Seco",
    Interlagos: "Lluvioso",
    YasMarina: "Seco",
    Suzuka: "Lluvioso"
};

export const circuitosView = [
    {
        nombre: "Monaco",
        pais: "Mónaco",
        longitud_km: 3.34,
        vueltas: 78,
        descripcion: "Uno de los circuitos más prestigiosos y difíciles del calendario, conocido por sus calles angostas y la falta de zonas de adelantamiento.",
        record_vuelta: { tiempo: "1:10.166", piloto: "Lewis Hamilton", año: 2019 },
        ganadores: [
            { temporada: 2021, piloto: 1 },
            { temporada: 2022, piloto: 2 },
            { temporada: 2023, piloto: 1 }
        ],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/3/36/Monte_Carlo_Formula_1_track_map.svg",
        desgaste_neumaticos: "Alto",
        consumo_combustible: "Medio",
    },
    {
        nombre: "Silverstone",
        pais: "Reino Unido",
        longitud_km: 5.89,
        vueltas: 52,
        descripcion: "Uno de los circuitos más rápidos del calendario, con curvas de alta velocidad como Maggotts y Becketts.",
        record_vuelta: { tiempo: "1:27.097", piloto: "Max Verstappen", año: 2020 },
        ganadores: [
            { temporada: 2021, piloto: 3 },
            { temporada: 2022, piloto: 5 },
            { temporada: 2023, piloto: 1 }
        ],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Circuit_Silverstone_2011.svg",
        desgaste_neumaticos: "Medio",
        consumo_combustible: "Alto"
    },
    {
        nombre: "SpaFrancorchamps",
        pais: "Bélgica",
        longitud_km: 7.00,
        vueltas: 44,
        descripcion: "Famoso por la curva Eau Rouge y la larga recta de Kemmel, un circuito donde la potencia del motor es clave.",
        record_vuelta: { tiempo: "1:46.286", piloto: "Valtteri Bottas", año: 2018 },
        ganadores: [
            { temporada: 2021, piloto: 1 },
            { temporada: 2022, piloto: 1 },
            { temporada: 2023, piloto: 1 }
        ],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/5/54/Spa-Francorchamps_of_Belgium.svg",
        desgaste_neumaticos: "Alto",
        consumo_combustible: "Alto"
    },
    {
        nombre: "Monza",
        pais: "Italia",
        longitud_km: 5.79,
        vueltas: 53,
        descripcion: "Conocido como 'El Templo de la Velocidad', Monza es el circuito más rápido del calendario con largas rectas y chicanes icónicas.",
        record_vuelta: { tiempo: "1:21.046", piloto: "Rubens Barrichello", año: 2004 },
        ganadores: [
            { temporada: 2021, piloto: 2 },
            { temporada: 2022, piloto: 1 },
            { temporada: 2023, piloto: 1 }
        ],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Monza_track_map.svg",
        desgaste_neumaticos: "Bajo",
        consumo_combustible: "Medio"
    },
    {
        nombre: "Interlagos",
        pais: "Brasil",
        longitud_km: 4.31,
        vueltas: 71,
        descripcion: "Interlagos es un circuito legendario con cambios de elevación y un trazado técnico que ha sido sede de algunas de las carreras más emocionantes de la historia.",
        record_vuelta: { tiempo: "1:10.540", piloto: "Valtteri Bottas", año: 2018 },
        ganadores: [
            { temporada: 2021, piloto: 3 },
            { temporada: 2022, piloto: 1 },
            { temporada: 2023, piloto: 1 }
        ],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace_%28AKA_Interlagos%29_track_map.svg",
        desgaste_neumaticos: "Medio",
        consumo_combustible: "Bajo"
    },
    {
        nombre: "YasMarina",
        pais: "Emiratos Árabes Unidos",
        longitud_km: 5.28,
        vueltas: 58,
        descripcion: "Ubicado en Abu Dhabi, es famoso por ser el circuito donde se definen muchos campeonatos, con un diseño moderno y una espectacular carrera nocturna.",
        record_vuelta: { tiempo: "1:39.283", piloto: "Lewis Hamilton", año: 2019 },
        ganadores: [
            { temporada: 2021, piloto: 1 },
            { temporada: 2022, piloto: 1 },
            { temporada: 2023, piloto: 3 }
        ],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Yas_Marina_Circuit.png",
        desgaste_neumaticos: "Alto",
        consumo_combustible: "Medio"
    },
    {
        nombre: "Suzuka",
        pais: "Japon",
        longitud_km: 5.81,
        vueltas: 53,
        descripcion: "Un circuito desafiante con un diseño en forma de ocho, famoso por sus curvas de alta velocidad como 130R y la 'S' de Senna.",
        record_vuelta: { tiempo: "1:30.983", piloto: "Lewis Hamilton", año: 2019 },
        ganadores: [
            { temporada: 2021, piloto: 1 },
            { temporada: 2022, piloto: 1 },
            { temporada: 2023, piloto: 1 }
        ],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Suzuka_circuit_map--2005.svg",
        desgaste_neumaticos: "Bajo",
        consumo_combustible: "Alto"
    }
];

// Obtener y pasar los datos al componente
const contenedor = document.getElementById('circuit-container')
contenedor.renderData(circuitosView, climaPorCircuitoView)

