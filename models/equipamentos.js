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