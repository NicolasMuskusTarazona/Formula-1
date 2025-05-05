import { STORAGE_KEYS_PILOTOS } from './storageKeys.js';
import { pilotosAdmin } from './pilotosData.js';

export function obtenerPilotos() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS_PILOTOS.PILOTOSADMIN)) || [];
}

export function guardarPilotos(pilotosAdmin) {
    localStorage.setItem(STORAGE_KEYS_PILOTOS.PILOTOSADMIN, JSON.stringify(pilotosAdmin));
}

console.log(JSON.parse(localStorage.getItem('pilotosAdmin')));
