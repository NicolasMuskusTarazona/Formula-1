import { STORAGE_KEYS_VEHICULOS } from './storageKeys.js';
import { vehiculosAdmin } from './vehiculosData.js';

export function obtenerVehiculos() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS_VEHICULOS.VEHICULOSADMIN)) || [];
}

export function guardarVehiculos(vehiculosAdmin) {
    localStorage.setItem(STORAGE_KEYS_VEHICULOS.VEHICULOSADMIN, JSON.stringify(vehiculosAdmin));
}
