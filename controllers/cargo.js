const Cargo = require('../models/cargo')
const autenticador	=	require('../middlewares/autenticador');
module.exports = (app) => {

  

    app.post('/cargos', (req, res) => {
        const cargo = req.body;
        Cargo.adiciona(cargo, res);
    });


    app.get('/cargos', (req, res)=>{
        console.log("rota da lista de cargos");
        Cargo.lista(res);
    });


    app.get('/cargos/:id', (req, res)=>{
        const id = parseInt(req.params.id);
        console.log(`rota da pesquisa de Cargo por id=${id}`);
        Cargo.pesquisarPorId(id, res);
    });


    app.delete('/cargos/:id',(req, res)=>{
        const id = parseInt(req.params.id);
        console.log(`rota de deletar o  equipamento id=${id}`);
        Cargo.deleta(id, res);
    });


    app.patch('/cargos/:id', (req,res) =>{
        const id = parseInt(req.params.id);
        const cargo = req.body;
        console.log(`rota de atualizar Cargo id=${id}`);
        Cargo.atualiza(id, cargo, res);
    });


}