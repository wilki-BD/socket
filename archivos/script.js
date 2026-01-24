let titulo = document.getElementById('titulo');
let icg = document.getElementById('i-c-g');
let bod = document.body;
let cdn = document.getElementById('con_den_nom');
let ign = document.getElementById('ing_nom');

let nombre;

let socket = io();

icg.onclick = () => {
//--  obtener nombre

    nombre = ign.value; 
    bod.removeChild(cdn);


//-----
    
    bod.style.transition = '2s' ;
    bod.style.background = '#002818';
    
    setTimeout(() => {
        
        bod.style.transition = '0s';
        
    },2000);
    
    titulo.style.transition = '2s';
    cdn.style.transition = '2s';
    icg.style.transition = '2s';
    
    titulo.style.transform = 'translateX(300px)';
    icg.style.transform = 'translateX(-300px)';
    cdn.style.opacity = '0';
    
    titulo.style.opacity = '0';
    icg.style.opacity = '0';
    
    
    
    setTimeout(() => {
    
        bod.removeChild(titulo);
        bod.removeChild(icg);
        
    },2000);
    
//---------------------------------------

    let con_men = document.
    createElement('div');
    
    con_men.id = 'con_men';
   
    bod.appendChild(con_men);
    con_men.style.animation = 'aterrizar 2s linear 0s 1 both';
    
//---------------------------------------

    let con_bar_men = document.
    createElement('div'); 
    con_bar_men.id = 'con_bar_men';
    bod.appendChild(con_bar_men);
   
    con_bar_men.style.animation = 'aparecerAterrizar 2s linear 0s 1 both';
    
    let den_men = document.
    createElement('input'); 
    den_men.id = 'den_men';
    den_men.placeholder = 'Ingresa tu mensaje aqui.';
    con_bar_men.appendChild(den_men);
    
    let env_men = document.
    createElement('div'); 
    env_men.id = 'env_men';
    con_bar_men.appendChild(env_men);

//---------------------------------------

    env_men.addEventListener('touchstart', () => {
        
        env_men.style.backgroundColor = '#92dbc0';
       
    });
    
    
    env_men.addEventListener('touchend', () => {
        
        env_men.style.backgroundColor = '#568171';
//---------------------------------]
        
      
      //enviar mensaje al servidor 
      
      socket.emit('mensaje', {
          
          de: nombre,
          mensaje: den_men.value
          
      });       
        
//---------------------------------]   

      den_men.value = '';    
       
    });
    
    
    
    
    
    
    
    
};

function crearMensaje(nombre,mensaje) {
    
    let men = document.createElement('div');
    
    men.id = 'men';
    con_men.appendChild(men);
    
    let nom_usu = document.createElement('div');
    nom_usu.id = 'nom_usu';
    men.appendChild(nom_usu);
    
    let men_usu = document.createElement('div');
    men_usu.id = 'men_usu';
    men.appendChild(men_usu);
    
//--------------------------------

    nom_usu.innerText = nombre;
    men_usu.innerText = mensaje    
    
}



//---------------------------------]
        
      
      //recibir mensaje del servidor
      
      socket.on('mensaje', (datos) => {
          
          crearMensaje(datos.de,datos.mensaje);
        
      });        
        
//---------------------------------]        
       
