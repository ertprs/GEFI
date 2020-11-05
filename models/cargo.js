const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Cargo {

    adiciona(cargo, res){
        const sql = 'INSERT INTO cargos SET ?'

        conexao.query(sql, cargo, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(cargo)
            }
        })
    }

    deleta(id, res){
        const sql = 'delete from cargos where id = ?';
        conexao.query(sql, id, (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }
        });
    }

    lista(res){
        const sql ='SELECT *FROM cargoS';
        conexao.query(sql,[], (erro, resultado) =>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }    
        });
    }

   
    atualiza(id, cargo, res){
        const sql = 'update cargos set ? where id = ?';
        conexao.query(sql, [cargo, id], (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }
        });
    }



    pesquisarPorId(id, res){
        const sql = `SELECT * FROM cargos WHERE id=${id}`;
       
        conexao.query(sql, (erro, resultado) =>{
            const cargo = resultado[0];
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(cargo);
            }
        });
    }

   
}

module.exports = new Cargo