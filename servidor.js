let express = require('express');
let http = require('http');
let path = require('path');
let { Server } = require('socket.io');
let cors = require('cors');

let app = express();
let server = http.createServer(app);
let io = new Server(server);

app.use(cors({
    
    origin : '*' ,
    methods : ['POST','GET','OPTIONS'],
    allowedHeaders : ['Content-Type','Authorization']
    
}));

app.use(express.static(path.join('./files')));



io.on('connection', (socket) => {
    
    
    console.log(`Nuevo usuario conectado de id: ${socket.id}.`);
    
    
    socket.on('mensaje', (men) => {
        
        io.emit('mensaje',men);
        
    });
    
    
    socket.on('disconnect', () => {
        
        console.log(`Usuario de id: ${socket.id} desconectado.`)
        
    });
    
    
});




server.listen(3000, () => {
    
    console.log('Servidor corriendo en el puerto 3000...')
    
});