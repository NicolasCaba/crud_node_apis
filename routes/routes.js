// Require
const { vendedoresController } = require('../controllers/vendedoresController');
const { productosController } = require('../controllers/productosController');

// Routes vendedores
global.app.post('/vendedores/guardar', (request, response) => {
  vendedoresController.guardar(request, response);
});

global.app.post('/vendedores/listar', (request, response) => {
  vendedoresController.listar(request, response);
});

global.app.post('/vendedores/modificar', (request, response) => {
  vendedoresController.modificar(request, response);
});

global.app.post('/vendedores/eliminar', (request, response) => {
  vendedoresController.eliminar(request, response);
});

// Routes producto
global.app.post('/productos/guardar', (request, response) => {
  productosController.guardar(request, response);
});

global.app.post('/productos/listar', (request, response) => {
  productosController.listar(request, response);
});

global.app.post('/productos/modificar', (request, response) => {
  productosController.modificar(request, response);
});

global.app.post('/productos/eliminar', (request, response) => {
  productosController.eliminar(request, response);
});
