const Equipamento = require('../models/usuarios')
const autenticador	=	require('../middlewares/autenticador');
module.exports = (app) => {

    //const { Equipamento } = app.models.equipamentos;

    app.get('/', autenticador,(req, res) => res.send('GEFI'));


    app.post('/usuarios', (req, res) => {
        const equipamento = req.body;
        console.log("rota de salvar usuarios");
        Equipamento.adiciona(equipamento, res);
    });


    app.get('/usuarios', (req, res)=>{
        console.log("rota da lista de usuarios");
        Equipamento.lista(res);
    });


    app.get('/equipamentos/:id', (req, res)=>{
        console.log("rota da pesquisa de usuario por id");
        const id = req.param('id');
        Equipamento.pesquisarPorId(id, res);
    });

    app.get('/usuario/:nome', (req, res)=>{
        console.log("rota da pesquisa de equipamento por descricao");
        const descricao = req.param('descricao');
        Equipamento.pesquisarPorDescricao(descricao, res);
    });

    app.get('/usuario/:matricula', (req, res)=>{
        console.log("rota da pesquisa de usuario por matricula");
        const codigoCPTM = req.param('codigoCPTM');
        Equipamento.pesquisarPorCodigoCPTM(codigoCPTM, res);
    });

    app.get('/usuario/:login', (req, res)=>{
        console.log("rota da pesquisa de de usuario por login ");
        const fabricante = req.param('fabricante');
        Equipamento.pesquisarPorFabricante(fabricante, res);
    });

    app.get('/equipamentos/:modelo', (req, res)=>{
        console.log("rota da pesquisa de equipamento por modelo");
        const modelo = req.param('modelo');
        Equipamento.pesquisarPorModelo(id, res);
    });


    app.delete('/equipamentos/:id',(req, res)=>{
        console.log("rota deletar equipamento por id");
        const id = req.body.id;
        Equipamento.deleta(id, res);
    });


    app.put('/equipamentos', (req,res) =>{
        console.log("rota de atualizar o  equipamento");
        const equipamento = req.body;
        Equipamento.atualiza(equipamento, res);
     
    });




}