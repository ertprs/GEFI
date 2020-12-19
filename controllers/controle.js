const Controle = require('../models/controle')
const Equipamento = require('../models/equipamentos')
const autenticador	=	require('../middlewares/autenticador');

module.exports = (app) => {

    const publicFolder = 'process.cwd()+"/public/gefi-web/dist/gefi-web/';
  
   app.get('/controle', (req,res) => {
       	res.sendFile(`${publicFolder}/index.html`);

    });

    
    app.get('/controles', (req, res)=>{
        console.log("rota da lista de controle");
        Controle.lista(res);
    });

    
    app.delete('/controles/:id',(req, res)=>{
        console.log("rota deletar controle por id");
        const id = req.body.id;
        Controle.deleta(id, res);
    });


    app.put('/controles', (req,res) =>{
        console.log("rota de atualizar o controle");
        const controle = req.body;
        Controle.atualiza(controle, id, res);
     
    });


    app.get('/controles/:id', (req, res)=>{
        console.log("rota da pesquisa de controle por id");
        const id = req.param('id');
        Controle.pesquisarPorId(id, res);
    });



    app.post('/controles', (req, res) => {
        const controleTemp = req.body;
        const controle = {};
        const dataRetirada = new Date();
        console.log(controleTemp);
        controle.USUARIO_FK = controleTemp.usuario.id;
        controle.EQUIPAMENTO_FK = controleTemp.equipamento.id;
        controle.data_retirada = dataRetirada;

        console.log(controle);
        console.log("rota de salvar controle");
        Equipamento.atualizaStatus(controleTemp.equipamento.id, controleTemp.equipamento, res);
        Controle.adiciona(controle, res);

    });


    app.get('/controles/devolver-equipamento', (req, res)=>{
        console.log("rota - Devolve Equipamento");
        const id = req.param('id');
        Controle.devolveEquipamento(res);
    });


    app.get('/controles/requisitar-equipamento', (req, res)=>{
        console.log("rota - Requisita Equipamento");
        const id = req.param('id');
        Controle.requisitaEquipamento(res);
    });

    

    app.get('/controles/listar-equipamentos-disponiveis-por-area', (req, res)=>{
        console.log("rota - lista equipamentos disponiveis por área");
        const id = req.param('id');
        Controle.listaEquipamentosDisponiveisPorArea(res);
    });


    app.get('/controles/listar-equipamentos-requisitados-por-usuario', (req, res)=>{
        console.log("rota - lista equipamentos requisitados pelo usuário");
        const id = req.param('id');
        Controle.listaEquipamentosRequisitadosPeloUsuario(res);
    });



    app.get('/controles/tratar-falha', (req, res)=>{
        console.log("rota - trata falha");
        const id = req.param('id');
        Controle.trataFalha(res);
    });

    app.get('/controles/listar-equipamentos-com-falha-por-usuario', (req, res)=>{
        console.log("rota - lista equipamentos com falha");
        const id = req.param('id');
        Controle.listaEquipamentosComFalhaPorArea(res);
    });

    app.get('/controles/lista-equipamentos-requisitados-por-area', (req, res)=>{
        console.log("rota - lista requisicoes por área");
        const id = req.param('id');
        Controle.listaRequisicoesPorArea(res);
    });

    app.get('/controles/notifica-gestor', (req, res)=>{
        console.log("rota - lista requisicoes por área");
        const id = req.param('id');
        Controle.notificaGestor(res);
    });



 





}