// Obtener vehículos desde LocalStorage
export const getVehiculosFromStorage = () => {
  const vehiculosAdmin = JSON.parse(localStorage.getItem('vehiculosAdmin'));
  return vehiculosAdmin ? vehiculosAdmin : [];
};

// Agregar un nuevo vehículo a LocalStorage
export const addVehiculoToStorage = (vehiculo) => {
  const vehiculosAdmin = getVehiculosFromStorage();
  vehiculosAdmin.push(vehiculo);
  localStorage.setItem('vehiculosAdmin', JSON.stringify(vehiculosAdmin));
};

// Eliminar un vehículo de LocalStorage
export const deleteVehiculoFromStorage = (index) => {
  const vehiculosAdmin = getVehiculosFromStorage();
  vehiculosAdmin.splice(index, 1);
  localStorage.setItem('vehiculosAdmin', JSON.stringify(vehiculosAdmin));
};

// Editar un vehículo en LocalStorage
export const editVehiculoInStorage = (index, vehiculo) => {
  const vehiculosAdmin = getVehiculosFromStorage();
  vehiculosAdmin[index] = vehiculo;
  localStorage.setItem('vehiculosAdmin', JSON.stringify(vehiculosAdmin));
};