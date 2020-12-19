const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Controle {

    devolveEquipamento(res){

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

    requisitaEquipamento(res){

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

    listaEquipamentosDisponiveisPorArea(res){

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


   
    listaEquipamentosRequisitadosPeloUsuario(res){

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

    trataFalha(res){

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

    listaEquipamentosComFalhaPorArea(res){

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

    listaRequisicoesPorArea(){

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
       const sql = `SELECT * FROM controles
        left join equipamentos on controles.EQUIPAMENTO_FK=equipamentos.id
        left join usuarios on controles.USUARIO_FK = usuarios.id
        and data_devolucao is null;`;
        conexao.query(sql, [], (err, results)=>{
            if(err){
                res.status(400).json(err);
            }else{
              
                res.status(201).json(this.convertObjectToJson(results));
            }
        });
    }

    convertObjectToJson(controles){
        var lista=[];
        controles.forEach(controle => {

            const controleReturn={};
            const usuario = {};
            const equipamento ={};
    
            controleReturn.data_retirada = controle.data_retirada;
            controleReturn.data_devolucao = controle.data_devolucao;
            controleReturn.id = controle.id; 
            usuario.nome = controle.nome;
            usuario.matricula = controle.matricula;

            equipamento.descricao = controle.descricao;    
            equipamento.codigoCPTM = controle.codigoCPTM;
            equipamento.fabricante = controle.fabricante;
            equipamento.modelo = controle.modelo;

            controleReturn.equipamento = equipamento;
            controleReturn.usuario = usuario;
            lista.push(controleReturn)
        });
        
        return lista;
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