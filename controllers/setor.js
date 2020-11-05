const Setor = require('../models/setor')
const autenticador	=	require('../middlewares/autenticador');
module.exports = (app) => {

  

    app.post('/setores', (req, res) => {
        const setor = req.body;
        Setor.adiciona(setor, res);
    });


    app.get('/setores', (req, res)=>{
        console.log("rota da lista de setores");
        Setor.lista(res);
    });


    app.get('/setores/:id', (req, res)=>{
        const id = parseInt(req.params.id);
        console.log(`rota da pesquisa de setor por id=${id}`);
        Setor.pesquisarPorId(id, res);
    });


    app.delete('/setores/:id',(req, res)=>{
        const id = parseInt(req.params.id);
        console.log(`rota de deletar o setor id=${id}`);
        Setor.deleta(id, res);
    });


    app.patch('/setores/:id', (req,res) =>{
        const id = parseInt(req.params.id);
        const setor = req.body;
        console.log(`rota de atualizar setor id=${id}`);
        Setor.atualiza(id, setor, res);
    });


}