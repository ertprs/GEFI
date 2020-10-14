const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class EquipamentoControle {

    
    pesquisarPorId(EquipamentoControle, res){
        const sql = 'select *from EquipamentoControles where login = ? and senha = ? ';
        conexao.query(sql, [EquipamentoControle.login, EquipamentoControle.senha], (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }
        });
    }

    salvarEquipamentoControle(EquipamentoControle, res){
        const sql = 'insert into EquipamentoControles(nome, matricula, login, senha) values(?,?,?,?,)';
        conexao.query(sql, EquipamentoControle,(err, result) =>{
            if(err){
                res.status(400).json(err);
            }else{
                res.status(201).json(result);
            }
        });
    }

    deletarEquipamentoControle(id, res){
        const sql = 'delete from EquipamentoControles where id = ?';
        conexao.query(sql, [id], (err, results) =>{
            if(err){
                res.status(400).json(err);
            }else{
                res.status(201).json(results);
            }
        })
    }

    listarEquipamentoControle(res){
        const sql = 'select *from EquipamentoControles';
        conexao.query(sql, [], (err, results)=>{
            if(err){
                res.status(400).json(err);
            }else{
                res.status(201).json(results);
            }
        });
    }


    atualizarEquipamentoControle(EquipamentoControle, res){
        const sql = 'update EquipamentoControles set nome=?, matricula=?, login=?, senha=? where id=?';
        conexao.query(sql, [EquipamentoControle.nome, EquipamentoControle.matricula, EquipamentoControle.login,
            EquipamentoControle.senha, EquipamentoControle.id], (err, results)=>{
            if(err){
                res.status(400).json(err);
            }else{
                res.status(201).json(results);
            }
        });
    }



    
}

module.exports = new EquipamentoControle