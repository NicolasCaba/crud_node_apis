const { productosModel } = require('../models/productosModel');

// Main object
const productosController = {};

// Controller
productosController.guardar = function guardar(request, response) {
  const producto = {
    nombre: request.body.nombre,
    precio: request.body.precio,
    stock: request.body.stock,
  };

  if (
    producto.nombre === undefined ||
    producto.nombre === null ||
    producto.nombre === ''
  ) {
    response.json({
      state: false,
      message: 'El nombre del producto es obligatorio',
    });
    return false;
  }

  if (
    producto.precio === undefined ||
    producto.precio === null ||
    producto.precio === ''
  ) {
    response.json({
      state: false,
      message: 'El precio del producto es obligatorio',
    });
    return false;
  }

  if (
    producto.stock === undefined ||
    producto.stock === null ||
    producto.stock === ''
  ) {
    response.json({
      state: false,
      message: 'El stock del producto es obligatorio',
    });
    return false;
  }

  productosModel.guardar(producto, (modelResponse) => {
    response.json(modelResponse);
  });
  return true;
};

productosController.listar = function listar(request, response) {
  productosModel.listar(null, (modelResponse) => {
    response.json(modelResponse);
  });
};

productosController.modificar = function modificar(request, response) {
  const post = {
    posicion: request.body.posicion,
    nombre: request.body.nombre,
    precio: request.body.precio,
    stock: request.body.stock,
  };

  if (
    post.posicion === undefined ||
    post.posicion === null ||
    post.posicion === ''
  ) {
    response.json({
      state: false,
      message: 'Una posicion es necesaria para poder modificar',
    });
    return false;
  }

  if (post.nombre === undefined || post.nombre === null || post.nombre === '') {
    response.json({
      state: false,
      message: 'El nombre del producto es obligatorio',
    });
    return false;
  }

  if (post.precio === undefined || post.precio === null || post.precio === '') {
    response.json({
      state: false,
      message: 'El precio del producto es obligatorio',
    });
    return false;
  }

  if (post.stock === undefined || post.stock === null || post.stock === '') {
    response.json({
      state: false,
      message: 'El stock del producto es obligatorio',
    });
    return false;
  }

  productosModel.modificar(post, (modelResponse) => {
    response.json(modelResponse);
  });
  return true;
};

productosController.eliminar = function eliminar(request, response) {
  const post = {
    posicion: request.body.posicion,
  };

  if (
    post.posicion === undefined ||
    post.posicion === null ||
    post.posicion === ''
  ) {
    response.json({
      state: false,
      message: 'Una posicion es necesaria para poder modificar',
    });
    return false;
  }

  productosModel.eliminar(post, (modelResponse) => {
    response.json(modelResponse);
  });
  return true;
};

module.exports.productosController = productosController;
