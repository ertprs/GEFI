const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Controle {

    adicionaFalhaDoEquipamento(res, equipamentocomfalha){

        const sql = `insert into equipamentoscomfalhas SET ? `;
       
        conexao.query(sql,[equipamentocomfalha], (erro, resultado) =>{

            const equipamento = resultado;
            
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(equipamento);
            }

        });

    }
    
    atualizaFalhaDoEquipamento(res, equipamentocomfalha){

        const sql = `update equipamentoscomfalhas set ? where id = ?`;
       
        conexao.query(sql,[equipamentocomfalha,
                 equipamentocomfalha.id], (erro, resultado) =>{

            const equipamento = resultado;
            
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(equipamento);
            }

        });

}

    listaFalhaDoEquipamento(res, equipamentocomfalha){

        const sql = `SELECT * FROM equipamentoscomfalhas where status = ? and departamento_fk = ?`;
    
        conexao.query(sql,[equipamentocomfalha.status,
             equipamentocomfalha.departamento_fk], (erro, resultado) =>{
            const equipamentosComFalhas = resultado;
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(equipamentosComFalhas);
            }
        });

    }

    adicionaControle(res, controle){

        const sql = `insert into controles set ?`;
       
        conexao.query(sql,[controle], (erro, resultado) =>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }
        });
    }


    atualizaControle(res, controle, id){

        const sql = `UPDATE controles SET ? WHERE id =?`;
       
        conexao.query(sql,[controle, id], (erro, resultado) =>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }
        });
    }

  

    listaControlePorArea(res, controle){

        const sql = `SELECT * FROM controles where status = ? and departamento_fk = ?`;
        
        conexao.query(sql,[controle.status, 
                controle.departamento_fk], (erro, resultado) =>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }
        });

    }


    listaControlePorUsuario(res, controle){
    
             const sql = `SELECT * FROM controles where status = ?  and colaborador_fk = ?`;
           
            conexao.query(sql,[controle.status, controle.colaborador_fk], (erro, resultado) =>{
                if(erro){
                    res.status(400).json(erro);
                }else{
                    res.status(201).json(resultado);
                }
            });

    }


    
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

 


    
}

module.exports = new Controle