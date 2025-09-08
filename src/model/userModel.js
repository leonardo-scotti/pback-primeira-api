//Simulação de um banco de dados em memória
let users = [
    {
        id: 1,
        name: 'Alice',
        email: 'alice@gmail.com'
    },
    {
        id: 2,
        name: 'Roberto',
        email: 'roberto@gmail.com'
    },
    {
        id: 3,
        name: 'Josué',
        email: 'josue@gmail.com'
    }
]

//Funções que irão simular integração com o banco de dados
//Função que lista todos os funcionários. (SELECT)
const findAll = () => {
    return users
}

//Função que busca um usuário por ID (SELECT)
const findById = (id) => {
    return users.find(user => user.id === id)
}

//Função para adicionar um novo usuário (INSERT)
const create = (newUser) => {
    //Gerando o ID do próximo usuário
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1


    //criando um novo usuário com o id novo
    const userWithId = {
        id: newId,
        ...newUser
    }

    //Adicionar o userWithId no array user
    users.push(userWithId)

    //Retorar o usuário cadastrado
    return userWithId
}

module.exports = {
    findAll,
    findById,
    create
}