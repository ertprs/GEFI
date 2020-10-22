const Equipamento = require('../models/equipamentos')
const autenticador	=	require('../middlewares/autenticador');
module.exports = (app) => {

    //const { Equipamento } = app.models.equipamentos;

    app.get('/', autenticador,(req, res) => res.send('GEFI'));


    app.post('/equipamentos', (req, res) => {
        const equipamento = req.body;
        console.log("rota de salvar equipamentos");
        Equipamento.adiciona(equipamento, res);
    });


    app.get('/equipamentos', (req, res)=>{
        console.log("rota da lista de equipamentos");
        Equipamento.lista(res);
    });


    app.get('/equipamentos/:id', (req, res)=>{
        console.log("rota da pesquisa de equipamento por id");
        const id = req.param('id');
        Equipamento.pesquisarPorId(id, res);
    });

    app.get('/equipamentos/:descricao', (req, res)=>{
        console.log("rota da pesquisa de equipamento por descricao");
        const descricao = req.param('descricao');
        Equipamento.pesquisarPorDescricao(descricao, res);
    });

    app.get('/equipamentos/:codigoCPTM', (req, res)=>{
        console.log("rota da pesquisa de equipamento por codigoCPTM");
        const codigoCPTM = req.param('codigoCPTM');
        Equipamento.pesquisarPorCodigoCPTM(codigoCPTM, res);
    });

    app.get('/equipamentos/:fabricante', (req, res)=>{
        console.log("rota da pesquisa de equipamento por fabricante");
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