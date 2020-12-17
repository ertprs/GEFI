const Controle = require('../models/controle')
const Equipamento = require('../models/equipamentos')
const autenticador	=	require('../middlewares/autenticador');
module.exports = (app) => {

    //const { Equipamento } = app.models.controle;

   // app.get('/', autenticador,(req, res) => res.send('GEFI'));

  
   app.get('/controle', (req,res) => {
        res.sendFile(process.cwd()+"/public/gefi-web/dist/gefi-web/index.html")

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


    app.get('/pendencias', (req, res)=>{
        var pendencias = []
 

        pendencia1 = criaUsuario();
        pendencia1.id = 1;
        
        pendencia2 = criaUsuario();
        pendencia2.id = 2;

        pendencia3 = criaUsuario();
        pendencia3.id = 3;

       pendencias.push(pendencia1)
        pendencias.push(pendencia2)
        pendencias.push(pendencia3)
   

        res.status(201).json(pendencias);
    });

 
    function criaUsuario(){
        
        var pendencia={};
        pendencia.quantidadeDePendencias = 1;
        pendencia.nome ='fabio'
       

        return pendencia;;
        
    }





}