//Import do userModel
const USERMODEL = require('../model/userModel');

//Função do controller que lista os usuários
const getAllUsers = (req, res) => {
    //Chamando a função findAll do model
    const users = USERMODEL.findAll();

    //Devolver uma resposta para o cliente
    res.status(200).json(users);
}

//Função do controller que obtem um usuário por ID (SELECT)
const getUserById = (req, res) => {
    //Pegando o ID que foi enviado na requisição
    const id = parseInt(req.params.id);

    //Chamar o método findById do userModel
    const user = USERMODEL.findById(id);

    if(user) {
        //Responder com status code 200 e devolver os dados do usuário em formato json
        res.status(200).json(user);
    } else {
        res.status(404).json({mensagem: 'Usuário não encontrado!'});
    }
}

//Função do controlador que cria um novo usuário
const createUser = (req, res) => {
    //Pegando os dados que foram enviados pelo Body da requisição
    const {name, email} = req.body;

    //Validar se os valores foram enviados
    if(!name || !email) {
        return res.status(400).json({mensagem: 'Nome e email são obrigatórios!'});
    } else {
        const newUser = USERMODEL.create({name, email});
        res.status(201).json(newUser);
    }

}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}