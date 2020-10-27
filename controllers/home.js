
const jwt = require('jsonwebtoken');
const autenticador	=	require('../middlewares/autenticador');
const Usuario = require('../models/usuario')
const conexao = require('../infraestrutura/conexao')

module.exports = (app) => {

    app.get('/teste', autenticador,(req, res) => {
        res.status(500).json({message: 'Login válido!'});
    });


    app.post('/login', (req, res) => {

        login = req.body.login;
        senha = req.body.senha;

        if(login && senha){
            const sql = 'select *from usuarios where login = ? and senha = ? ';
            conexao.query(sql, [login, senha], (erro, resultado)=>{
                if(erro){
                    res.status(400).json(erro);
                }else{
 
                    if(resultado.length > 0 ){
                        const id = resultado[0].id;
                        console.log(id)
                        var token = jwt.sign({ id }, process.env.SECRET, {
                            expiresIn: 300 // expires in 5min
                          });
                     
                        const retorno = {};
                        retorno.token = token;
                        retorno.auth = true;
                        retorno.login = resultado[0].login;
                        console.log(retorno)
                        res.status(201).json(retorno);
                    }else{
                        res.status(500).json({message: 'Login inválido!'});
                    }
    
    
                    
                }
            });
        }
    });
     





    app.post('/logout', (req, res)=>{
        res.json({ auth: false, token: null });
    });


}