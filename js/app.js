// constantes varadas
const monedas = new Map();
monedas.set('USD','Dolares');
monedas.set('EUR', 'Euros');
const monedasField = document.getElementById('moneda');
const criptoField = document.getElementById('criptomoneda');
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
    const monedaSeleccionada = monedasField.options[monedasField.selectedIndex].value;
    const criptoSeleccionada = criptoField.options[criptoField.selectedIndex].value;
    
    if(validateValue(monedaSeleccionada) == false || validateValue(criptoSeleccionada) == false){
        // Mensaje de error
        console.log('Error');
    } else{
        //llamada a la API
        console.log('SUCCESS');
    }
});

// Utils

const validateValue = valor => valor === '' ? false : true;