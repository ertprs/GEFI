const Controle = require('../models/controle')
const autenticador	=	require('../middlewares/autenticador');
module.exports = (app) => {

    //const { Equipamento } = app.models.controle;

   // app.get('/', autenticador,(req, res) => res.send('GEFI'));

  
   app.get('/controle', (req,res) => {
    res.sendFile(process.cwd()+"/public/gefi-web/dist/gefi-web/index.html")

    });


    app.post('/controles', (req, res) => {
        const controle = req.body;
        const dataRetirada = new Date();
        controle.dataRetirada = dataRetirada;
        console.log("rota de salvar controle");
        Controle.adiciona(controle, res);
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

 





}