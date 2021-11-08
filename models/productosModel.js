// Main object
const productosModel = {};

const productos = [];

productosModel.guardar = function guardar(post, callback) {
  productos.push(post);
  return callback({
    state: true,
    message: 'Producto registrado correctamente',
  });
};
productosModel.listar = function listar(post, callback) {
  return callback({ state: true, data: productos });
};

productosModel.modificar = function modificar(post, callback) {
  if (!productos[post.posicion]) {
    return callback({ state: false, message: 'Posicion no encontrada' });
  }

  const productoNuevo = {
    nombre: post.nombre,
    precio: post.precio,
    stock: post.stock,
  };

  productos[post.posicion] = productoNuevo;
  return callback({ state: true, message: 'Producto modificado' });
};

productosModel.eliminar = function eliminar(post, callback) {
  if (!productos[post.posicion]) {
    return callback({ state: false, message: 'Posicion no encontrada' });
  }

  productos.splice(post.posicion, 1);
  return callback({ state: true, message: 'Producto eliminado correctamente' });
};

module.exports.productosModel = productosModel;
