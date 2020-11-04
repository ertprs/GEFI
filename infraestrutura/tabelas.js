class Tabelas {
    init(conexao) {
        this.conexao = conexao;

        this.criarEquipamentos();
        this.criarUsuarios();
        this.criarControle();
        this.inserirUsuarios();
        this.inserirEquipamentos();
    }

    criarEquipamentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS equipamentos (id int NOT NULL AUTO_INCREMENT, descricao varchar(50) NOT NULL, fabricante varchar(50), modelo varchar(50) NOT NULL, codigoCPTM varchar(20) NOT NULL UNIQUE, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Atendimentos criada com sucesso')
            }
        })
    }

    criarUsuarios() {
        const sql = 'CREATE TABLE IF NOT EXISTS usuarios(id int NOT NULL AUTO_INCREMENT, nome varchar(100), matricula varchar(9) UNIQUE, login varchar(20) UNIQUE, senha varchar(20), PRIMARY KEY(id), PRIVILEGIO VARCHAR(4))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Usuários criada com sucesso')
            }
        })
    }

    inserirUsuarios() {
        const sql = 
            `
            INSERT INTO usuarios (
                nome, 
                matricula,
                login, 
                senha,
                privilegio
            ) SELECT 'Fabio Julio', '9200297-0', 'fabiolu', '371240', 'admin' WHERE NOT EXISTS (SELECT * FROM usuarios WHERE login = 'fabiolu')
            `;
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Usuário inserido com sucesso')
            }
        })
    }


    inserirEquipamentos() {
        const sql = 
            `
            INSERT INTO EQUIPAMENTOS (
                DESCRICAO, 
                MODELO,
                CODIGOCPTM, 
                FABRICANTE
            ) SELECT 'MULTIMETRO', 'mx-10', '0678784', 'minipa' WHERE NOT EXISTS (SELECT * FROM EQUIPAMENTOS WHERE DESCRICAO = 'MULTRIMETRO')
            `;
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Usuário inserido com sucesso')
            }
        })
    }


    criarControle() {
        const sql = 'CREATE TABLE IF NOT EXISTS controles (id int NOT NULL AUTO_INCREMENT,USUARIO_FK int, EQUIPAMENTO_FK int, data_entrega datetime, data_retirada datetime  , PRIMARY KEY(id), foreign key(usuario_fk) references usuarios(id), foreign key(equipamento_fk) references equipamentos(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela controleEquipamentos criada com sucesso')
            }
        })
    }



}

module.exports = new Tabelas