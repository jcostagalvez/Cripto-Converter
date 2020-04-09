//Clases Importadas
const ui = new Interfaz();
const util = new Utils();

// constantes varadas
const apiKey = '1dca0c6c048cdfaa1b1eb20f62f078bd0f58167da31df5bb68e1699920355e02';
const coins = new Map();
coins.set('USD','Dolares');
coins.set('EUR', 'Euros');
const coinsField = document.getElementById('moneda');
const criptoField = document.getElementById('criptomoneda');
const form = document.getElementById('formulario');
// Introducir los valores en las diferentes opciones.
ui.buildOptionList(coins, coinsField);


//Evento al clickar el botón. 
form.addEventListener('submit', e => {
    e.preventDefault();
    const coinSelected = coinsField.options[coinsField.selectedIndex].value;
    const criptoSelected = criptoField.value;
    
    if(util.blankValueValidation(coinSelected) == true || util.blankValueValidation(criptoSelected) == true){
        // Mensaje de error
        console.log('Error');
        ui.showError('Por favor rellene ambos campos', 'alert', 'Error'); 
    } else{        
        //llamada a la API
        console.log('SUCCESS');
    }
});

// Utils

