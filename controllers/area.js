const Area = require('../models/area')
const autenticador	=	require('../middlewares/autenticador');
module.exports = (app) => {

  

    app.get('/areas', (req, res)=>{
        console.log("rota da lista de areas");
        Area.lista(res);
    });


    app.get('/areas/:id', (req, res)=>{
        const id = parseInt(req.params.id);
        console.log(`rota da pesquisa de area por id=${id}`);
        Area.pesquisarPorId(id, res);
    });


    app.delete('/areas/:id',(req, res)=>{
        const id = parseInt(req.params.id);
        console.log(`rota de deletar area id=${id}`);
        Area.deleta(id, res);
    });


    app.patch('/areas/:id', (req,res) =>{
        const id = parseInt(req.params.id);
        const area = req.body;
        console.log(`rota de atualizar area id=${id}`);
        Area.atualiza(id, area, res);
    });


}