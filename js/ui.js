// constantes varadas
const monedas = new Map();
monedas.set('USD','Dolares');
monedas.set('EUR', 'Euros');
const monedasField = document.getElementById('moneda');
const formulario = document.getElementById('formulario');

// Introducir los valores en las monedas


monedas.forEach ((value, key) =>{
   const opcion = document.createElement('option');
   opcion.value = key;
   opcion.appendChild(document.createTextNode(value));
   monedasField.appendChild(opcion);
})


//Evento al clickar el botón.
formulario.addEventListener('submit', e => {
    e.preventDefault();

});