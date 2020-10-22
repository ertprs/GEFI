const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Controle {

    
    pesquisarPorId(Controle, res){
        const sql = 'select *from controles where login = ? and senha = ? ';
        conexao.query(sql, [Controle.login, Controle.senha], (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }
        });
    }

    salvarControle(controle, res){
        const sql = 'insert into controles(usuario_fk, equipamento_fk, data_entrega, data_retirada) values(?,?,?,?)';
     
        conexao.query(sql, controle,(err, result) =>{
            if(err){
                res.status(400).json(err);
            }else{
                res.status(201).json(result);
            }
        });
    }

    deletarControle(id, res){
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


    atualizarControle(Controle, res){
        const sql = 'update controles set nome=?, matricula=?, login=?, senha=? where id=?';
        conexao.query(sql, [Controle.nome, Controle.matricula, Controle.login,
            Controle.senha, Controle.id], (err, results)=>{
            if(err){
                res.status(400).json(err);
            }else{
                res.status(201).json(results);
            }
        });
    }



    
}

module.exports = new Controle