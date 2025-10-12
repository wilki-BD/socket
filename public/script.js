const socket = io();
const mensajesDiv = document.getElementById('mensajes');
const entrada = document.getElementById('entrada');

        function enviar() {
            const texto = entrada.value;
            if (texto) {
                socket.emit('mensaje', { texto: texto });
                entrada.value = '';
            }
        }
        
        

        socket.on('mensaje', (datos) => {
            const div = document.createElement('div');
            div.className = 'mensaje';
            div.textContent = datos.texto;
            mensajesDiv.appendChild(div);
            mensajesDiv.scrollTop = mensajesDiv.scrollHeight;
        });
        
        
        

        entrada.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') enviar();
        });
    