// Importar o módulo do express
const EXPRESS = require('express');

//import do userRoutes
const USERROUTES = require('./src/routes/userRoutes');

//Criar uma aplicação express
const App =  EXPRESS();
App.use(EXPRESS.json());

//Definir a porta em que o servidor irá funcionar (escutar)
const Porta = 8000;

//Rota de teste da API
App.get('/api', (req, res) => {
    res.send('API de Usuários está funcionando!')
});

//Configurando as rotas de usuários
App.use('/api/users', USERROUTES);

//Iniciar o servidor 
App.listen(Porta, () => {
    console.log(`Servidor rodanddo em http://localhost:${Porta}`)
})