const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Usuario conectado:', socket.id);

    socket.on('mensaje', (datos) => {
        io.emit('mensaje', datos);
    });

    socket.on('disconnect', () => {
        console.log('Usuario desconectado:', socket.id);
    });
});

server.listen(3000, '0.0.0.0', () => {
    console.log('Servidor en http://localhost:3000');
});