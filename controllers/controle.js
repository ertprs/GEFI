const Controle = require('../models/controle')
const autenticador	=	require('../middlewares/autenticador');
module.exports = (app) => {

    //const { Equipamento } = app.models.controle;

    app.get('/', autenticador,(req, res) => res.send('GEFI'));


    app.post('/controle', (req, res) => {
        const controle = req.body;
        console.log("rota de salvar controle");
        Controle.adiciona(controle, res);
    });


    app.get('/controle', (req, res)=>{
        console.log("rota da lista de controle");
        Controle.lista(res);
    });
    
    app.delete('/controle/:id',(req, res)=>{
        console.log("rota deletar controle por id");
        const id = req.body.id;
        Controle.deleta(id, res);
    });


    app.put('/controle', (req,res) =>{
        console.log("rota de atualizar o controle");
        const controle = req.body;
        Controle.atualiza(controle, res);
     
    });


    app.get('/controle/:id', (req, res)=>{
        console.log("rota da pesquisa de controle por id");
        const id = req.param('id');
        Controle.pesquisarPorId(id, res);
    });

 





}