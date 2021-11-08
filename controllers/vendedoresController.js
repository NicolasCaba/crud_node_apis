// Require
const { vendedoresModel } = require('../models/vendedoresModel');

// Main object
const vendedoresController = {};

// Controller
vendedoresController.guardar = function guardar(request, response) {
  const post = {
    nombre: request.body.nombre,
  };

  if (post.nombre === undefined || post.nombre === null || post.nombre === '') {
    response.json({ state: false, message: 'El campo nombre es obligatorio' });
    return false;
  }

  vendedoresModel.guardar(post, (modelResponse) => {
    response.json(modelResponse);
  });
  return true;
};

vendedoresController.listar = function listar(request, response) {
  vendedoresModel.listar(null, (modelResponse) => {
    response.json(modelResponse);
  });
};

vendedoresController.modificar = function modificar(request, response) {
  const post = {
    posicion: request.body.posicion,
    nuevoNombre: request.body.nuevoNombre,
  };

  if (
    post.posicion === undefined ||
    post.posicion === null ||
    post.posicion === ''
  ) {
    response.json({
      state: false,
      message: 'Es necesaria una posicion a modificar',
    });
    return false;
  }

  if (
    post.nuevoNombre === undefined ||
    post.nuevoNombre === null ||
    post.nuevoNombre === ''
  ) {
    response.json({
      state: false,
      message: 'El nuevo nombre es obligatorio',
    });
    return false;
  }

  vendedoresModel.modificar(post, (modelResponse) => {
    response.json(modelResponse);
  });
  return true;
};

vendedoresController.eliminar = function eliminar(request, response) {
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
      message: 'Es necesaria una posicion a eliminar',
    });
    return false;
  }

  vendedoresModel.eliminar(post, (modelResponse) => {
    response.json(modelResponse);
  });
  return true;
};

module.exports.vendedoresController = vendedoresController;
