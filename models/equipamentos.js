const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Equipamento {

    adiciona(equipamento, res){
        const sql = 'INSERT INTO equipamentos SET ?'

        conexao.query(sql, equipamento, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(equipamento)
            }
        })
    }

    deleta(id, res){
        const sql = 'delete from equipamentos where id = ?';
        conexao.query(sql, id, (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }
        });
    }

    atualiza(id, equipamento, res){
        const sql = 'update equipamentos set ? where id = ?';
        conexao.query(sql, [equipamento, id], (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }
        });
    }


    lista(res){
        const sql ='SELECT *FROM EQUIPAMENTOS';
        conexao.query(sql,[], (erro, resultado) =>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }    
        });
    }


   
    pesquisarPorId(id, res){
        const sql = `SELECT * FROM equipamentos WHERE id=${id}`;
       
        conexao.query(sql, (erro, resultado) =>{
            const equipamento = resultado[0];
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(equipamento);
            }
        });
    }




   
}

module.exports = new Equipamento