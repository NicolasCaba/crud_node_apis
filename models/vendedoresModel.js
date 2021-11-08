// Main object
const vendedoresModel = {};

const datos = [];

vendedoresModel.guardar = function guardar(post, callback) {
  datos.push(post.nombre);
  return callback({ state: true, message: 'Vendedor registrado' });
};

vendedoresModel.listar = function listar(post, callback) {
  return callback({ state: true, data: datos });
};

vendedoresModel.modificar = function modificar(post, callback) {
  if (!datos[post.posicion]) {
    return callback({ state: false, message: 'Posicion no encontrada' });
  }
  datos[post.posicion] = post.nuevoNombre;
  return callback({ state: true, message: 'Vendedor modificado' });
};

vendedoresModel.eliminar = function eliminar(post, callback) {
  if (!datos[post.posicion]) {
    return callback({ state: false, message: 'Posicion no encontrada' });
  }
  datos.splice(post.posicion, 1);
  return callback({ state: true, message: 'Vendedor eliminado' });
};

module.exports.vendedoresModel = vendedoresModel;
