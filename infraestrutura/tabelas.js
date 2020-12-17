const csv = require('csv-parser');
const fs = require('fs');

class Tabelas {
     init(conexao) {
/*        this.conexao = conexao;

        this.criarDepartamentos();
        this.criarCargos();
        this.criarUsuarios();
        
        this.criarEquipamentos();
        
        this.criarControle();
        
         this.inserirCargos();
         
        this.inserirDepartamentos();
         this.inserirEquipamentos();
        this.inserirUsuarios();*/

    }

    criarDepartamentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS departamentos (id int NOT NULL AUTO_INCREMENT, sigla VARCHAR(4) NOT NULL UNIQUE, descricao VARCHAR(200) NOT NULL UNIQUE, PRIMARY KEY(id))';

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela departamento criada com sucesso')
            }
        })
    }


    criarCargos() {
        const sql = 'CREATE TABLE IF NOT EXISTS cargos (id int NOT NULL AUTO_INCREMENT, descricao varchar(200) NOT NULL UNIQUE, PRIMARY KEY(id))';

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Cargos criada com sucesso')
            }
        })
    }



    criarUsuarios() {
        const sql = 'CREATE TABLE IF NOT EXISTS usuarios(id int NOT NULL AUTO_INCREMENT, nome varchar(200) NOT NULL UNIQUE, matricula varchar(9) NOT NULL UNIQUE, login varchar(20) NOT NULL UNIQUE, senha varchar(200) NOT NULL, PRIMARY KEY(id), privilegio VARCHAR(6), cargo_fk int NOT NULL, foreign key(cargo_fk) references cargos(id), departamento_fk int NOT NULL, foreign key(departamento_fk) references departamentos(id), trocar_senha TINYINT NOT NULL)';

        this.conexao.query(sql, erro => {
            if(erro) { 
                console.log(erro)
            } else {
                console.log('Tabela Usuários criada com sucesso')
            }
        })
    }



    criarEquipamentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS equipamentos (id int NOT NULL AUTO_INCREMENT, descricao varchar(200) NOT NULL, fabricante varchar(100), modelo varchar(200) , codigoCPTM varchar(20) UNIQUE, PRIMARY KEY(id), status VARCHAR(20), departamento_fk int not null, foreign key(departamento_fk) references departamentos(id))'
        //sqltest = 'SELECT campos FROM tabela WHERE  dia BETWEEN STR_TO_DATE( "01/05/2014", "%m/%d/%Y" ) AND STR_TO_DATE( "31/10/2014", "%m/%d/%Y" ) ;'
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Equipamentos criada com sucesso')
            }
        })
    }


    criarControle() {
        const sql = 'CREATE TABLE IF NOT EXISTS controles (id int NOT NULL AUTO_INCREMENT,USUARIO_FK int, EQUIPAMENTO_FK int, data_devolucao datetime, data_retirada datetime  , PRIMARY KEY(id), foreign key(usuario_fk) references usuarios(id), foreign key(equipamento_fk) references equipamentos(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela controleEquipamentos criada com sucesso')
            }
        })
    }

    inserirCargos(){
        fs.createReadStream('infraestrutura/csvs/cargos.csv')
            .pipe(csv()).on('data', (cargos) => {
                console.log(cargos)
                const sql = `insert into cargos(id, descricao) values(${cargos.ID},'${cargos.DESCRICAO}')`;
                console.log(sql);
                this.inserirSQL(sql);
            }).on('end', () => {
                console.log('CSV file successfully processed');
        });      
    }

    inserirUsuarios(){
        fs.createReadStream('infraestrutura/csvs/usuarios.csv')
        .pipe(csv()).on('data', (usuario) => {
            console.log(usuario)
            const sql = `insert into usuarios(ID,NOME,MATRICULA,LOGIN,SENHA,PRIVILEGIO,CARGO_FK,departamento_FK,TROCAR_SENHA) `+
            `values(${usuario.ID},'${usuario.NOME}', '${usuario.MATRICULA}','${usuario.LOGIN}',`+
            `'${usuario.SENHA}','${usuario.PRIVILEGIO}', ${usuario.CARGO_FK}, ${usuario.AREA_FK}, ${usuario.TROCAR_SENHA})`;

            console.log(sql);
           this.inserirSQL(sql);
        }).on('end', () => {
            console.log('CSV file successfully processed');
    });   
    }

   async inserirDepartamentos(){
        fs.createReadStream('infraestrutura/csvs/departamentos.csv')
        .pipe(csv()).on('data', (departamento) => {
            console.log(departamento)
            const sql = `insert into departamentos(id,sigla,descricao) values(${departamento.id},'${departamento.SIGLA}','${departamento.DESCRICAO}');`;
            console.log(sql);
            this.inserirSQL(sql);
        }).on('end', () => {
            console.log('CSV file successfully processed');
    });  
    }

    inserirEquipamentos(){
        fs.createReadStream('infraestrutura/csvs/equipamentos.csv')
        .pipe(csv()).on('data', (equipamento) => {
            console.log(equipamento);
            const sql = `insert into equipamentos(id,codigoCPTM,DESCRICAO,Fabricante,Modelo,status,departamento_FK) `+ 
                `values(${equipamento.id},'${equipamento.codigoCPTM}','${equipamento.DESCRICAO}',`+
                `'${equipamento.Fabricante}','${equipamento.Modelo}','${equipamento.status}',${equipamento.AREA_FK})`;
                console.log(sql);
                this.inserirSQL(sql);
        }).on('end', () => {
            console.log('CSV file successfully processed');
        });   
}

   async inserirSQL(sql){
        await this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Inserido com sucesso')
            }
        })
    }


    


   
    



}

module.exports = new Tabelas