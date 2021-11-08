async function peticion(url, requestOptions) {
  let resultado;
  const response = await fetch(url, requestOptions)
    .then((fetchResponse) => fetchResponse.json())
    .then((result) => {
      resultado = result;
    })
    .catch((error) => error);

  return resultado;
}

function listarVendedores() {
  const tbodyVendedores = document.querySelector('#listado-vendedores');
  tbodyVendedores.innerHTML = '';

  const requestOptions = {
    method: 'POST',
    redirect: 'follow',
  };

  const resultadoPeticion = peticion('/vendedores/listar', requestOptions);
  console.log(resultadoPeticion);
  resultadoPeticion.then((respuesta) => {
    console.log(respuesta.data);
    if (respuesta.state === true) {
      for (let i = 0; i < respuesta.data.length; i += 1) {
        const tr = document.createElement('TR');
        const td1 = document.createElement('TD');
        const td2 = document.createElement('TD');

        td1.scope = 'row';
        td1.textContent = i + 1;

        td2.textContent = respuesta.data[i];

        tr.appendChild(td1);
        tr.appendChild(td2);

        tbodyVendedores.appendChild(tr);
      }
    }
  });
}

function guardarVendedores() {
  const inputNombre = document.querySelector('#nombre').value;
  const datos = `nombre=${inputNombre}`;

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: datos,
    redirect: 'follow',
  };

  const resultadoPeticion = peticion('/vendedores/guardar', requestOptions);
  resultadoPeticion.then((respuesta) => {
    if (respuesta.state === false) {
      //swal('Ups :(', respuesta.message, 'error');
    }
    if (respuesta.state === true) {
      //swal('Bien!', respuesta.message, 'success');
    }
  });
}

function myEventListeners() {
  const btnGuardar = document.querySelector('#btn-guardar');
  btnGuardar.addEventListener('click', () => {
    guardarVendedores();
    listarVendedores();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  myEventListeners();
  listarVendedores();
});
