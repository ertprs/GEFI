const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Setor {

    adiciona(setor, res){
        const sql = 'INSERT INTO setores SET ?'

        conexao.query(sql, setor, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(setor)
            }
        })
    }

    deleta(id, res){
        const sql = 'delete from setores where id = ?';
        conexao.query(sql, id, (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }
        });
    }

    lista(res){
        const sql ='SELECT *FROM setores';
        conexao.query(sql,[], (erro, resultado) =>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }    
        });
    }

   
    atualiza(id, setor, res){
        const sql = 'update setores set ? where id = ?';
        conexao.query(sql, [setor, id], (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }
        });
    }



    pesquisarPorId(id, res){
        const sql = `SELECT * FROM setores WHERE id=${id}`;
       
        conexao.query(sql, (erro, resultado) =>{
            const setor = resultado[0];
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(setor);
            }
        });
    }

   
}

module.exports = new Setor