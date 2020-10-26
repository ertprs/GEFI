const Usuario = require('../models/usuario')
const autenticador	=	require('../middlewares/autenticador');
module.exports = (app) => {

    //const { Usuario } = app.models.Usuarios;

    app.get('/', autenticador,(req, res) => res.send('GEFI'));


    app.post('/usuarios', (req, res) => {
        const usuario = req.body;
        console.log("rota de salvar usuarios");
        Usuario.adiciona(usuario, res);
    });


    app.get('/usuarios', (req, res)=>{
        console.log("rota da lista de usuarios");
        Usuario.lista(res);
    });


    app.get('/usuarios/:id', (req, res)=>{
        console.log("rota da pesquisa de usuario por id");
        const id = req.param('id');
        Usuario.pesquisarPorId(id, res);
    });

    app.get('/usuario/:nome', (req, res)=>{
        console.log("rota da pesquisa de usuario por nome");
        const nome = req.param('nome');
        Usuario.pesquisarPorNome(nome, res);
    });

    app.get('/usuario/:matricula', (req, res)=>{
        console.log("rota da pesquisa de usuario por matricula");
        const matricula = req.param('matricula');
        Usuario.pesquisarPorMatricula(matricula, res);
    });

    app.get('/usuario/:login', (req, res)=>{
        console.log("rota da pesquisa de de usuario por login ");
        const login = req.param('login');
        Usuario.pesquisarPorLogin(login, res);
    });

  


    app.delete('/usuarios/:id',(req, res)=>{
        console.log("rota deletar usuario por id");
        const id = req.body.id;
        Usuario.deleta(id, res);
    });


    app.put('/usuarios', (req,res) =>{
        console.log("rota de atualizar o usuario");
        const usuario = req.body;
        Usuario.atualiza(usuario, res);
     
    });




}