import '../components/team-container-admin.js';
import '../components/teamAdmin.js';

export const pilotos = [
    { id: 1, nombre: "Max Verstappen", equipo: "Red Bull Racing", rol: "Líder", foto: "https://soymotor.com/sites/default/files/2025-03/mverstappen_2025.png" },
    { id: 2, nombre: "Sergio Pérez", equipo: "Red Bull Racing", rol: "Escudero", foto: "https://soymotor.com/sites/default/files/2024-02/sergio-perez-2024.png" },
    { id: 3, nombre: "Lewis Hamilton", equipo: "Mercedes-AMG Petronas", rol: "Líder", foto: "https://soymotor.com/sites/default/files/2025-03/lhamilton_2025.png" },
    { id: 4, nombre: "George Russell", equipo: "Mercedes-AMG Petronas", rol: "Escudero", foto: "https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/5503.png&w=350&h=254" },
    { id: 5, nombre: "Charles Leclerc", equipo: "Ferrari", rol: "Líder", foto: "https://www.thesportsdb.com/images/media/player/cutout/o22gqr1740660501.png" },
    { id: 6, nombre: "Carlos Sainz", equipo: "Ferrari", rol: "Escudero", foto: "https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4686.png" },
    { id: 7, nombre: "Lando Norris", equipo: "McLaren", rol: "Líder", foto: "https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/5579.png&w=350&h=254" },
    { id: 8, nombre: "Oscar Piastri", equipo: "McLaren", rol: "Escudero", foto: "https://soymotor.com/sites/default/files/2025-03/opiastri_2025.png" },
    { id: 9, nombre: "Fernando Alonso", equipo: "Aston Martin", rol: "Líder", foto: "https://soymotor.com/sites/default/files/2025-03/falonso_2025.png" },
    { id: 10, nombre: "Lance Stroll", equipo: "Aston Martin", rol: "Escudero", foto: "https://cdn.racingnews365.com/Riders/Stroll/_570x570_crop_center-center_none/f1_2024_ls_ast_lg.png?v=1708704434" },
    { id: 11, nombre: "Esteban Ocon", equipo: "Alpine", rol: "Líder", foto: "https://soymotor.com/sites/default/files/2025-03/eocon_2025.png" },
    { id: 12, nombre: "Pierre Gasly", equipo: "Alpine", rol: "Escudero", foto: "https://soymotor.com/sites/default/files/2025-03/pgasly_2025.png" },
    { id: 13, nombre: "Valtteri Bottas", equipo: "Alfa Romeo", rol: "Líder", foto: "https://soymotor.com/sites/default/files/2024-02/valtteri-bottas-2024.png" },
    { id: 14, nombre: "Zhou Guanyu", equipo: "Alfa Romeo", rol: "Escudero", foto: "https://soymotor.com/sites/default/files/2024-02/guanyu-zhou-2024.png" },
    { id: 15, nombre: "Kevin Magnussen", equipo: "Haas", rol: "Líder", foto: "https://soymotor.com/sites/default/files/2024-02/kevin-magnussen-2024.png" },
    { id: 16, nombre: "Nico Hülkenberg", equipo: "Haas", rol: "Escudero", foto: "https://soymotor.com/sites/default/files/2025-03/nhulkenberg_2025.png" },
    { id: 17, nombre: "Yuki Tsunoda", equipo: "AlphaTauri", rol: "Líder", foto: "https://soymotor.com/sites/default/files/2025-03/yuki-tsunoda-red-bull-2025.png" },
    { id: 18, nombre: "Daniel Ricciardo", equipo: "AlphaTauri", rol: "Escudero", foto: "https://soymotor.com/sites/default/files/2024-02/daniel-ricciardo-2024.png" },
    { id: 19, nombre: "Alexander Albon", equipo: "Williams", rol: "Líder", foto: "https://soymotor.com/sites/default/files/2025-03/aalbon_2025.png" },
    { id: 20, nombre: "Logan Sargeant", equipo: "Williams", rol: "Escudero", foto: "https://soymotor.com/sites/default/files/2024-02/logan-sargeant-2024.png" }
];
export const equipos = [
    {
        nombre: "Red Bull Racing",
        pais: "Austria",
        motor: "Honda",
        pilotos: [1, 2],
        imagen: "https://i.pinimg.com/originals/51/0c/07/510c07f646e06fbda90f4eb522425e4f.jpg",
        carro: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/red-bull-racing.png"
    },
    {
        nombre: "Mercedes-AMG Petronas",
        pais: "Alemania",
        motor: "Mercedes",
        pilotos: [3, 4],
        imagen: "https://i.pinimg.com/736x/53/a8/46/53a8466e6e4d0af16e6b6c0633e7cd4f.jpg",
        carro: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/mercedes.png"
    },
    {
        nombre: "Ferrari",
        pais: "Italia",
        motor: "Ferrari",
        pilotos: [5, 6],
        imagen: "https://dbdzm869oupei.cloudfront.net/img/sticker/preview/2251.png",
        carro: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/ferrari.png"
    },
    {
        nombre: "McLaren",
        pais: "Reino Unido",
        motor: "Mercedes",
        pilotos: [7, 8],
        imagen: "https://cdn.worldvectorlogo.com/logos/mclaren.svg",
        carro: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/mclaren.png"
    },
    {
        nombre: "Aston Martin",
        pais: "Reino Unido",
        motor: "Mercedes",
        pilotos: [9, 10],
        imagen: "https://brandemia.org/contenido/subidas/2022/07/1-2-1024x572.png",
        carro: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/aston-martin.png"
    },
    {
        nombre: "Alpine",
        pais: "Francia",
        motor: "Renault",
        pilotos: [11, 12],
        imagen: "https://hips.hearstapps.com/hmg-prod/images/et3dwsmxuam3is8-1612973513.jpg",
        carro: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/alpine.png"
    },
    {
        nombre: "Alfa Romeo",
        pais: "Suiza",
        motor: "Ferrari",
        pilotos: [13, 14],
        imagen: "https://1000marcas.net/wp-content/uploads/2019/12/Alfa-Romeo-logotipo.jpg",
        carro: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/kick-sauber.png"
    },
    {
        nombre: "Haas",
        pais: "Estados Unidos",
        motor: "Ferrari",
        pilotos: [15, 16],
        imagen: "https://i.pinimg.com/736x/28/36/b0/2836b01c6580691ecc6919ba6bcb1e41.jpg",
        carro: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/haas.png"
    },
    {
        nombre: "AlphaTauri",
        pais: "Italia",
        motor: "Honda",
        pilotos: [17, 18],
        imagen: "https://external-preview.redd.it/7fW_kMYXlBMW2hCp-0SOK5vdlSpc57U50tK6ZyOzGPo.jpg?auto=webp&s=faa99261816d162c70214a897c89f41c606dad3c",
        carro: "https://gpesportsrd.com/images/cars21/alphatauri-2021.png"
    },
    {
        nombre: "Williams",
        pais: "Reino Unido",
        motor: "Mercedes",
        pilotos: [19, 20],
        imagen: "https://i.pinimg.com/564x/85/18/d6/8518d6f31e64691fd178cf4966ebf3e5.jpg",
        carro: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/williams.png"
    }
];


document.addEventListener('DOMContentLoaded', () => {
    localStorage.setItem('equiposAdmin', JSON.stringify(equipos));
    localStorage.setItem('pilotosAdmin', JSON.stringify(pilotos));
  
    const contenedorAdmin = document.getElementById('teamAdmin-container');
    if (contenedorAdmin) {
      contenedorAdmin.renderData(equipos, pilotos);
    } else {
      console.error('No se encontró el contenedor con id "teamAdmin-container"');
    }
  });