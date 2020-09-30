const Equipamento = require('../models/equipamentos')

module.exports = app => {
    app.get('/', (req, res) => res.send('Você está na rota de equipamentos e está realizando um GET'))


    app.post('/equipamentos', (req, res) => {
       const equipamento = req.body

        Equipamento.adiciona(equipamento, res)
    });


    app.get('/equipamentos', (req, res)=>{
        Equipamento.lista(res);
    });
}