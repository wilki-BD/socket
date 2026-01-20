let express = require('express');
let path = require('path');

let app = express();



app.use(express.static(path.join("./archivos")));



app.listen(3000, '0.0.0.0', () => {
    
    console.log('servidor de proyecto 1 en el puerto: 3000');
    
});