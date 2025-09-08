//Import do express
const EXPRESS = require('express');

//Import do controller
const USERCONTROLLER = require('../controller/userController');

//Criação de um router
const router = EXPRESS.Router();

//Criação das rotas dos usuários
router.get('/list', USERCONTROLLER.getAllUsers);

//Criação de rota que irá obter os dados do usuário atarvés do ID
router.get('/:id', USERCONTROLLER.getUserById);

//Criando uma rota que irá criar um novo usuário
router.post('/', USERCONTROLLER.createUser)


module.exports = router;