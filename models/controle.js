const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Controle {

    
    pesquisarPorId(id, res){
        const sql = 'select *from controles where id = ? ';
        conexao.query(sql, id, (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }
        });
    }

    adiciona(controle, res){
        const sql = 'insert into controles set ?';
        conexao.query(sql, controle,(err, result) =>{
            if(err){
                res.status(400).json(err);
            }else{
                res.status(201).json(result);
            }
        });
    }

    deleta(id, res){
        const sql = 'delete from controles where id = ?';
        conexao.query(sql, [id], (err, results) =>{
            if(err){
                res.status(400).json(err);
            }else{
                res.status(201).json(results);
            }
        })
    }

    lista(res){
        const sql = 'select *from controles';
        conexao.query(sql, [], (err, results)=>{
            if(err){
                res.status(400).json(err);
            }else{
                res.status(201).json(results);
            }
        });
    }


    atualiza(controle, id, res){
        const sql = 'update controles set ? where id=?';
        conexao.query(sql, [controle, id], (err, results)=>{
            if(err){
                res.status(400).json(err);
            }else{
                res.status(201).json(results);
            }
        });
    }



    
}

module.exports = new Controle