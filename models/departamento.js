const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Departamento{

    adiciona(setor, res){
        const sql = 'INSERT INTO departamentos SET ?'

        conexao.query(sql, setor, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(setor)
            }
        })
    }

    deleta(id, res){
        const sql = 'delete from departamentos where id = ?';
        conexao.query(sql, id, (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }
        });
    }

    lista(res){
        const sql ='SELECT *FROM departamentos';
        conexao.query(sql,[], (erro, resultado) =>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }    
        });
    }

   
    atualiza(id, departamento, res){
        const sql = 'update departamentos set ? where id = ?';
        conexao.query(sql, [departamento, id], (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }
        });
    }



    pesquisarPorId(id, res){
        const sql = `SELECT * FROM departamentos WHERE id=${id}`;
       
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

module.exports = new Departamento