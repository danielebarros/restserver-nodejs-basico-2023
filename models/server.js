const express = require('express')
const cors = require('cors');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middelwares
        this.middelwares();
        //Rutas de mi aplicacion
        this.routes();
    }

    middelwares() {
        //CORS
        this.app.use(cors());

        //Parseo y Lecturo del Body
        this.app.use(express.json());


        //Directorio publico
        this.app.use(express.static('public'));
    }


    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto:', this.port);
        })
    }

}

module.exports = Server
