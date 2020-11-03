const Usuario = require('../models/usuario')
const autenticador	=	require('../middlewares/autenticador');
module.exports = (app) => {

    //const { Usuario } = app.models.Usuarios;

    //app.get('/', autenticador,(req, res) => res.send('GEFI'));

  

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
        const id = parseInt(req.params.id);
        console.log(`rota da pesquisa de usuario por id=${id}`);
        Usuario.pesquisarPorId(id, res);
    });


    app.delete('/usuarios/:id',(req, res)=>{
        const id = parseInt(req.params.id);
        console.log(`rota de deletar o  equipamento id=${id}`);
        Usuario.deleta(id, res);
    });


    app.patch('/usuarios/:id', (req,res) =>{
        const id = parseInt(req.params.id);
        const usuario = req.body;
        console.log(`rota de atualizar usuario id=${id}`);
        Usuario.atualiza(id, usuario, res);
    });


    app.get('/usuario/autenticar/:login/:senha', (req, res)=>{
        console.log("rota da pesquisa de de usuario por login ");
        const usuario = req.body;
        Usuario.pesquisarPorLoginESenha(usuario, res);
    });




}