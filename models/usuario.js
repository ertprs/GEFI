const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Usuario {

    adiciona(usuario, res){
        const sql = 'insert into usuarios set ?';
        
        conexao.query(sql, usuario,(err, result) =>{
            if(err){
                res.status(400).json(err);
            }else{
                res.status(201).json(result);
            }
        });
    }


    
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

    
    deleta(id, res){
        const sql = 'delete from usuarios where id = ?';
        conexao.query(sql, id, (err, results) =>{
            if(err){
                res.status(400).json(err);
            }else{
                res.status(201).json(results);
            }
        })
    }

    lista(res){
        const sql = 'select *from usuarios';
        conexao.query(sql, [], (err, results)=>{
            if(err){
                res.status(400).json(err);
            }else{
                res.status(201).json(results);
            }
        });
    }


    atualiza(id, usuario, res){
        const sql = 'update usuarios set ? where id=?';
        conexao.query(sql, [usuario, id], (err, results)=>{
            if(err){
                res.status(400).json(err);
            }else{
                res.status(201).json(results);
            }
        });
    }



    
}

module.exports = new Usuario