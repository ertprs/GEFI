const Departamento = require('../models/departamento')
const autenticador	=	require('../middlewares/autenticador');
module.exports = (app) => {

  

    app.post('/departamentos', (req, res) => {
        const departamento = req.body;
        Departamento.adiciona(departamento, res);
    });


    app.get('/departamentos', (req, res)=>{
        console.log("rota da lista de departamentos");
        Departamento.lista(res);
    });


    app.get('/departamentos/:id', (req, res)=>{
        const id = parseInt(req.params.id);
        console.log(`rota da pesquisa de departamentos por id=${id}`);
        Departamento.pesquisarPorId(id, res);
    });


    app.delete('/departamentos/:id',(req, res)=>{
        const id = parseInt(req.params.id);
        console.log(`rota de deletar o  departamento id=${id}`);
        Departamento.deleta(id, res);
    });


    app.patch('/departamentos/:id', (req,res) =>{
        const id = parseInt(req.params.id);
        const departamento = req.body;
        console.log(`rota de atualizar o departamento id=${id}`);
        Departamento.atualiza(id, departamento, res);
    });


}