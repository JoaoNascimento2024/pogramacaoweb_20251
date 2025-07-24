import connection from "../config/ConnectMySQL.js";

class Funcionario {
    constructor(id, nome){
        this.id = id;
        this.nome = nome;
    }
}

const FuncionarioRepository = {

    async findAll() {
        const registros = await connection.query("SELECT id, nome FROM funcionarios", []);
        return registros.map(row => new Funcionario(row.id, row.nome));
    },

    async createFuncionario(nome){
        const registro = await connection.query("insert into funcionarios (nome) values (?)", [nome]);
        return {"id" : registro.insertId, nome};
    }

}

export default FuncionarioRepository;