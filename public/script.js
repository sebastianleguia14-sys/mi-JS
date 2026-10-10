var socket = io();

var chatBox = document.getElementById('chat-box');
var txtMensaje = document.getElementById('txt-mensaje');
var btnEnviar = document.getElementById('btn-enviar');

function agregarMensaje(texto, tipo) {
    var div = document.createElement('div');
    div.className = 'msg ' + tipo;
    div.innerText = texto;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

btnEnviar.addEventListener('click', function() {
    var mensaje = txtMensaje.value;
    if(mensaje.trim() !== "") {
        agregarMensaje(mensaje, 'enviado');
        socket.emit('mensaje-enviado', mensaje);
        txtMensaje.value = "";
    }
});

socket.on('mensaje-recibido', function(mensaje) {
    agregarMensaje(mensaje, 'recibido');
});
