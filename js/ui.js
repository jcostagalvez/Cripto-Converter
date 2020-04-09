class Interfaz{

    mostrarMensajeError(mensaje, clase, Id) {
        const createDiv = document.createElement('div');
        const createSpan = document.createElement('span');
        createSpan.className = 'MensajeCaja';
        createDiv.className = clase;
        createDiv.id = 'ContenedorMensaje';

        createSpan.appendChild(document.createTextNode(mensaje));
        const divMensaje = document.getElementById(Id);
        divMensaje.appendChild(createDiv);
        const spanMensaje = document.getElementById('ContenedorMensaje');
        spanMensaje.appendChild(createSpan);

        setTimeout( () =>{
            document.getElementById('ContenedorMensaje').remove();
        }, 3000)
    }
}