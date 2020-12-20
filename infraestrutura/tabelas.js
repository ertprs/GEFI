const csv = require('csv-parser');
const fs = require('fs');

class Tabelas {
    init(conexao) {
    this.conexao = conexao;

    this.criarDepartamentos();
    this.criarCargos();
    this.criarColaborador();
    this.criarEquipamentos();
    this.criarEquipamentosComFalhas();
    this.criarControle();
    this.criaRroles();
    this.criarUsuarios();
    this.criarColaboradoresDoDepartamento()
    this.criarCargosDosColaboradores();
    
    
    this.inserirCargos();
    this.inserirDepartamentos();
    this.inserircolaboradores();
    this.inserirEquipamentos();
    this.inserirRoles();
    this.inserirUsuarios();
    this.inserirCargosDosColaboradores();
    this.inserirColaboradoresDosDepartamento();

    }

    criarDepartamentos() {

        const sql = `CREATE TABLE IF NOT EXISTS departamentos
                     (id int NOT NULL AUTO_INCREMENT, sigla VARCHAR(6) NOT NULL UNIQUE,
                      descricao VARCHAR(200) NOT NULL UNIQUE, PRIMARY KEY(id))`;

        this.conexao.query(sql,  (erro, resultado)=> {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultado)
            }
        });
    }


    criarCargos() {
        const sql = `CREATE TABLE IF NOT EXISTS cargos 
                    (id int NOT NULL AUTO_INCREMENT, descricao varchar(200) NOT NULL UNIQUE, PRIMARY KEY(id))`;

        this.conexao.query(sql,  (erro, resultado)=> {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultado)
            }
        });
    }



    criarColaborador() {
        const sql = `CREATE TABLE IF NOT EXISTS 
        colaboradores(id int NOT NULL AUTO_INCREMENT, nome varchar(200) NOT NULL UNIQUE,
        matricula varchar(9) NOT NULL UNIQUE, ativo int, primary key(id));`;

        this.conexao.query(sql,  (erro, resultado)=> {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultado)
            }
        });
    }

  

    criarColaboradoresDoDepartamento() {
        const sql = `create table if not exists colaboradordodepartamento (id int not null auto_increment, 
            departamento_fk int, colaborador_fk int,
            foreign key(departamento_fk) references departamentos(id), 
            foreign key(colaborador_fk) references colaboradores(id),
			primary key(id))`;

        this.conexao.query(sql,  (erro, resultado)=> {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultado)
            }
        });
    }

    criaRroles() {
        const sql = `create table if not exists roles (id int not null auto_increment, descricao varchar(20),
                    primary key(id));`;

        this.conexao.query(sql,  (erro, resultado)=> {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultado)
            }
        });
    }

    criarUsuarios() {
        const sql = `create table if not exists usuarios (id int not null auto_increment, 
                    login varchar(20), senha varchar(250), role_fk int, 
                    trocar_senha int, primary key(id),
                    foreign key(role_fk) references roles(id), colaborador_fk int, 
                    foreign key(colaborador_fk) references colaboradores(id))`;

        this.conexao.query(sql,  (erro, resultado)=> {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultado)
            }
        });
    }

    






    criarEquipamentos() {
        const sql = `CREATE TABLE IF NOT EXISTS equipamentos 
        (id int NOT NULL AUTO_INCREMENT, descricao varchar(200) NOT NULL, fabricante varchar(100),
         modelo varchar(200) , codigoCPTM varchar(20) UNIQUE, PRIMARY KEY(id))`;
    
        this.conexao.query(sql,  (erro, resultado)=> {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultado)
            }
        });
    }


    criarControle() {
        const sql = `CREATE TABLE IF NOT EXISTS controles 
        (id int NOT NULL AUTO_INCREMENT, colaborador_fk int, equipamento_fk int, departamento_fk int,
        data_devolucao datetime, data_retirada datetime  , PRIMARY KEY(id), status int, 
        foreign key(colaborador_fk) references colaboradores(id), foreign key(equipamento_fk) 
        references equipamentos(id), foreign key (departamento_fk) references departamentos(id))`;

        this.conexao.query(sql,  (erro, resultado)=> {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultado)
            }
        });
    }

    criarEquipamentosComFalhas() {
        const sql = `CREATE TABLE IF NOT EXISTS EquipamentosComFalhas 
        (id int NOT NULL AUTO_INCREMENT,colaborador_FK int, equipamento_fk int, departamento_fk int,
            datarevisao datetime, PRIMARY KEY(id), status int,
            foreign key(colaborador_fk) references colaboradores(id), foreign key(equipamento_fk) references equipamentos(id),
            foreign key(departamento_fk) references departamentos(id))`;

        this.conexao.query(sql,  (erro, resultado)=> {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultado)
            }
        });
    }
  
    criarCargosDosColaboradores() {
        const sql = `CREATE TABLE IF NOT EXISTS 
        cargosdoscolaboradores(id int NOT NULL AUTO_INCREMENT, 
        colaborador_fk int, cargos_fk int, foreign key(colaborador_fk) references
        colaboradores(id), foreign key(cargos_fk) references cargos(id), primary key(id));`;

        this.conexao.query(sql,  (erro, resultado)=> {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultado)
            }
        });
    }

    
    


    inserirCargos(){
        fs.createReadStream('infraestrutura/csvs/cargos.csv')
            .pipe(csv()).on('data', (cargo) => {
                const sql = 'insert into cargos set ?';
                this.conexao.query(sql,[cargo], erro => {
                    if(erro) {
                        console.log(erro)
                    } else {
                        console.log('Inserido com sucesso')
                    }
                })
            }).on('end', () => {
                console.log('CSV file successfully processed');
        });      
    }

    inserirRoles(){
        fs.createReadStream('infraestrutura/csvs/roles.csv')
            .pipe(csv()).on('data', (roles) => {
                const sql = 'insert into roles set ?';
                this.conexao.query(sql,[roles], erro => {
                    if(erro) {
                        console.log(erro)
                    } else {
                        console.log('Inserido com sucesso')
                    }
                })
            }).on('end', () => {
                console.log('CSV file successfully processed');
        });      
    }


    inserircolaboradores(){
            fs.createReadStream('infraestrutura/csvs/colaboradores.csv')
            .pipe(csv()).on('data', (colaborador) => {
                const sql = `insert into colaboradores set ?`;
                this.conexao.query(sql,[colaborador], erro => {
                    if(erro) {
                        console.log(erro)
                    } else {
                        console.log('Inserido com sucesso')
                    }
                })
            }).on('end', () => {
                console.log('CSV file successfully processed');
        });   
    }

    inserirDepartamentos(){
        fs.createReadStream('infraestrutura/csvs/departamentos.csv')
        .pipe(csv()).on('data', (departamento) => {
            const sql = 'insert into departamentos set ? ';
            this.conexao.query(sql, [departamento], erro=>{
                if(erro) {
                    console.log(erro)
                } else {
                    console.log('Inserido com sucesso')
                }
            });
        }).on('end', () => {
            console.log('CSV file successfully processed');
    });  
    }

    inserirUsuarios(){
        
        fs.createReadStream('infraestrutura/csvs/usuarios.csv')
        .pipe(csv()).on('data', (usuario) => {
            const sql = 'insert into usuarios set ? ';
            this.conexao.query(sql, [usuario], erro=>{
                if(erro) {
                    console.log(erro)
                } else {
                    console.log('Inserido com sucesso')
                }
            });
        }).on('end', () => {
            console.log('CSV file successfully processed');
    }); 
    }

    inserirEquipamentos(){
        fs.createReadStream('infraestrutura/csvs/equipamentos.csv')
        .pipe(csv()).on('data', (equipamento) => {
            const sql = `insert into equipamentos set ?`;
            this.conexao.query(sql,[equipamento], erro => {
                if(erro) {
                    console.log(erro)
                } else {
                    console.log('Inserido com sucesso')
                }
            })
        }).on('end', () => {
            console.log('CSV file successfully processed');
        });   
    }

    inserirCargosDosColaboradores(){
        fs.createReadStream('infraestrutura/csvs/cargosdoscolaboradores.csv')
        .pipe(csv()).on('data', (equipamento) => {
            const sql = `insert into cargosdoscolaboradores set ?`;
            this.conexao.query(sql,[equipamento], erro => {
                if(erro) {
                    console.log(erro)
                } else {
                    console.log('Inserido com sucesso')
                }
            })
        }).on('end', () => {
            console.log('CSV file successfully processed');
        });   
    }

    inserirColaboradoresDosDepartamento(){
        fs.createReadStream('infraestrutura/csvs/colaboradordodepartamento.csv')
        .pipe(csv()).on('data', (colaboradordodepartamento) => {
            const sql = `insert into colaboradordodepartamento set ?`;
            this.conexao.query(sql,[colaboradordodepartamento], erro => {
                if(erro) {
                    console.log(erro)
                } else {
                    console.log('Inserido com sucesso')
                }
            })
        }).on('end', () => {
            console.log('CSV file successfully processed');
        });   
    }


  

}

module.exports = new Tabelas