const Controle = require('../models/controle')
const Equipamento = require('../models/equipamentos')
const autenticador	=	require('../middlewares/autenticador');

module.exports = (app) => {

    const publicFolder = 'process.cwd()+"/public/gefi-web/dist/gefi-web/';
  
   app.get('/controle', (req,res) => {
       	res.sendFile(`${publicFolder}/index.html`);

    });
    
    app.post('/falhadoequipamento', (req, res)=>{
        const equipamentocomfalha = req.body;
        console.log(equipamentocomfalha)
        equipamentocomfalha.datarevisao = new Date();
        console.log(`rota - adicionafalhadoequipamento/${equipamentocomfalha}`);
        Controle.adicionaFalhaDoEquipamento(res, equipamentocomfalha);
    });

    app.patch('/falhadoequipamento', (req, res)=>{
        const equipamentocomfalha = req.body;
        equipamentocomfalha.datarevisao = new Date();
        console.log(`rota - atualizafalhadoequipamento/${equipamentocomfalha}`);
        Controle.atualizaFalhaDoEquipamento(res, equipamentocomfalha);
    });

    app.get('/listafalhadoequipamento', (req, res)=>{
        const equipamentocomfalha = {};
        equipamentocomfalha.status = parseInt(req.query.status);
        equipamentocomfalha.departamento_fk = parseInt(req.query.departamento_fk);
        console.log(`rota - listafalhadoequipamento/${equipamentocomfalha}`);
        Controle.listaFalhaDoEquipamento(res, equipamentocomfalha);
    });

    app.post('/controle', (req, res)=>{
        const controle = req.body;
        controle.status = 0;
        controle.data_retirada = new Date();
        console.log(`rota - adicionaControle/${controle}`);
        Controle.adicionaControle(res, controle);
    });

    app.patch('/controle', (req, res)=>{
            const controle = {};
            id = parseInt(req.body.id);
            controle.equipamento_fk = parseInt(req.body.equipamento_fk);
            controle.colaborador_fk = parseInt(req.body.colaborador_fk);
            controle.status = 1;
            controle.data_devolucao = new Date();
            console.log(`rota - atualizacontrole/${controle}`);
            Controle.atualizaControle(res, controle, id);
        });

  
    app.get('/listacontroleporarea', (req, res)=>{
        const controle = {};
        controle.status = parseInt(req.query.status);
        controle.departamento_fk = parseInt(req.query.departamento_fk);
        console.log(`rota - listacontroleporarea/${controle}`);
        Controle.listaControlePorArea(res, controle);

    });

    app.get('/listacontroleporusuario', (req, res)=>{
        const controle = {};
        controle.status = parseInt(req.query.status);
        controle.colaborador_fk = parseInt(req.query.colaborador_fk);
        console.log(`rota - listacontroleporcolaborador/${controle.colaborador_fk}`);
        Controle.listaControlePorUsuario(res, controle);
    });   
}