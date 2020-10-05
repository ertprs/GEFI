const Equipamento = require('../models/equipamentos')

module.exports = app => {
    app.get('/', (req, res) => res.send('Você está na rota de equipamentos e está realizando um GET'))


    app.post('/equipamentos', (req, res) => {
        console.log('oi');
        const equipamento = req.body
        console.log(equipamento)
        Equipamento.adiciona(equipamento, res)
    });


    app.get('/equipamentos', (req, res)=>{
        console.log('fui chamado');
        Equipamento.lista(res);
    });

    app.delete('/equipamentos/:id',(req, res)=>{
        const id = req.param('id');
        console.log(id);
        Equipamento.deleta(id, res);
    });
}