const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Area {

    adiciona(area, res){
        const sql = 'INSERT INTO areas SET ?'

        conexao.query(sql, area, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(areas)
            }
        })
    }

    deleta(id, res){
        const sql = 'delete from areas where id = ?';
        conexao.query(sql, id, (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }
        });
    }

    lista(res){
        const sql ='SELECT *FROM areas';
        conexao.query(sql,[], (erro, resultado) =>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }    
        });
    }

   
    atualiza(id, areas, res){
        const sql = 'update areas set ? where id = ?';
        conexao.query(sql, [areas, id], (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }
        });
    }



    pesquisarPorId(id, res){
        const sql = `SELECT * FROM areas WHERE id=${id}`;
       
        conexao.query(sql, (erro, resultado) =>{
            const areas = resultado[0];
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(areas);
            }
        });
    }

   
}

module.exports = new Area