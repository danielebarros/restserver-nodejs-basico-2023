const {request,response}= require('express')


const usuariosGet = (req = request, res = response) => {

    const {nombre,apikey} = req.query;

    res.json({
        msg: 'get API - Controlador',
        nombre,
        apikey
    })
};

const usuariosPut = (req, res) => {

    const id = req.params.id

    res.json({
        msg: 'put API - Controlador',
        id
    })
}

const usuariosPost = (req, res) => {
    const {nombre, edad} = req.body;
    
    res.json({
        msg: 'post API - Controlador',
        nombre,
        edad
    })
}

const usuariosDelete= (req, res) => {
    res.json({
        msg: 'delete API - Controlador'
    })
}




module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}