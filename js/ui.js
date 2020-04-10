// instancia de las clases
const common = new Utils();
const apicall = new Api();



class Interfaz{
    constructor() {
        this.init();
    }
    
    init(){
        this.buildCriptoOptions();
    };

    showError(text, cssClass, Id) {
        const spinner = document.getElementById('spinner');
        const createDiv = document.createElement('div');
        const createSpan = document.createElement('span');
        createSpan.className = 'MensajeCaja';
        createDiv.className = cssClass;
        createDiv.id = 'ContenedorMensaje';

        createSpan.appendChild(document.createTextNode(text));
        const divMensaje = document.getElementById(Id);
        divMensaje.appendChild(createDiv);
        const spanMensaje = document.getElementById('ContenedorMensaje');
        spanMensaje.appendChild(createSpan);

        setTimeout( () =>{
            document.getElementById('ContenedorMensaje').remove();
        }, 3000)

        return null;
    };

    showResults(resultado, cripto, moneda) {
        const previewResult = document.querySelector('#resultado > div');
        if(previewResult){ this.visibilityOfContent(previewResult, 'none') };
        const datos = resultado[cripto][moneda];
        let fecha = new Date(datos.LASTUPDATE * 1000).toLocaleDateString('en-US');
        let templateHtml = `
        <div class='result'>
            <span class='resultText'>RESULTADO </span>
            <span class='resultText'>El valor de ${cripto} para ${moneda} es de ${datos.PRICE}.</span>
            <span class='resultText'>Su variación el ultimo dia es de: %${datos.CHANGEPCTDAY}.</span>
            <span class='resultText'>La ultima actualización fue: ${fecha}.</span>       
        </div>
        `;

        this.visibilityOfContent(spinner, 'block');

        setTimeout(() => {
            this.visibilityOfContent(spinner, 'none');
            document.getElementById('resultado').innerHTML = templateHtml;
        },2000);

    };

    buildOptionList(map, parentElement){

        map.forEach ((value, key) =>{

                const option = document.createElement('option');
                option.value = key;
                option.label = value;
                parentElement.appendChild(option);

         })

         return null;
    };

    buildCriptoOptions(){

        const dataList = document.getElementById('dataList');

        apicall.getData()
            .then(cripto => {
                const mp = new Map();
                for (let prop in cripto) {
                    mp.set(cripto[prop].Symbol, cripto[prop].CoinName);
                }      
                    this.buildOptionList(mp, dataList);
            });

        return null
    }

    visibilityOfContent(content, style) { content.style.display = style ;}
}