
const {Router } = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete } = require('../controllers/usuarios');

const router = Router();


//GET
router.get('/', usuariosGet)

//PUT
router.put('/:id', usuariosPut)

//POST
router.post('/', usuariosPost)

//DELETE
router.delete('/', usuariosDelete)




module.exports = router;