const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', function(socket) {
    console.log('¡Alguien se ha conectado al chat!');
    
    socket.on('mensaje-enviado', function(data) {
        socket.broadcast.emit('mensaje-recibido', data);
    });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, function() {
    console.log('Servidor listo en el puerto ' + PORT);
});
