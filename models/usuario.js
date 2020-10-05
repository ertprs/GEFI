const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Usuario {

    
    pesquisarPorLoginESenha(usuario, res){
        const sql = 'select *from usuarios where login = ? and senha = ? ';
        conexao.query(sql, [usuario.login, usuario.senha], (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }
        });
    }

    
}

module.exports = new Usuario