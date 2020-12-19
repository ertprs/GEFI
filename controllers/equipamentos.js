const Equipamento = require('../models/equipamentos')
const autenticador	=	require('../middlewares/autenticador');

module.exports = (app) => {

    const publicFolder = 'process.cwd()+"/public/gefi-web/dist/gefi-web/';


    app.get('/equipamento', (req,res) => {
		res.sendFile(`${publicFolder}/index.html`);
	});


    //ok
    app.post('/equipamentos', (req, res) => {
        const equipamento = req.body;
        console.log("rota de salvar equipamentos");
        Equipamento.adiciona(equipamento, res);
    });

     //ok
    app.get('/equipamentos', (req, res)=>{
        console.log("rota da lista de equipamentos");
        Equipamento.lista(res);
    });

    //ok
    app.delete('/equipamentos/:id',(req, res)=>{
        const id = parseInt(req.params.id);
        console.log(`rota de deletar o  equipamento id=${id}`);
        Equipamento.deleta(id, res);
    });


    //ok
    app.patch('/equipamentos/:id', (req,res) =>{
        const id = parseInt(req.params.id);
        const equipamento = req.body;
        console.log(`rota de atualizar equipamento id=${id}`);
        Equipamento.atualiza(id, equipamento, res);
     
    });

 

}