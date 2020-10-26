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

    pesquisarPorCodigoCPTM(codigoCPTM, res){
        const sql = 'select *from equipamentos where codigoCPTM like % ? %';
        conexao.query(sql, [codigoCPTM], (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }
        });
    }

    pesquisarPorModelo(modelo, res){
        const sql = 'select *from equipamentos where modelo like % ? %';
        conexao.query(sql, [modelo], (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }
        });
    }

    pesquisarPorDescricao(descricao, res){
        const sql = 'select *from equipamentos where descricao like % ? %';
        conexao.query(sql, [descricao], (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }
        });
    }

    pesquisarPorFabricante(fabricante, res){
        const sql = 'select *from equipamentos where fabricante like % ? %';
        conexao.query(sql, [fabricante], (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultado);
            }
        });
    }

  

    


    adicionaTeste(equipamento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(equipamento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        
        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteEhValido = equipamento.cliente.length >= 5

        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if(existemErros) {
            res.status(400).json(erros)
        } else {
            const equipamentoDatado = {...equipamento, dataCriacao, data}

            const sql = 'INSERT INTO equipamentos SET ?'
    
            conexao.query(sql, equipamentoDatado, (erro, resultados) => {
                if(erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(equipamento)
                }
            })
        }
       
    }
}

module.exports = new Equipamento