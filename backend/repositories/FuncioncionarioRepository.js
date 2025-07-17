import connection from "../config/ConnectMySQL.js";

const FuncionarioRepository = {

    async findAll() {
        const registros = await connection.query("SELECT id, nome FROM `funcionarios`", []);
        return registros.map(row => {row.id, row.nome});
    },

    async createFuncionario(nome){
        const registro = await connection.query("insert into funcionarios (nome) values (?)", [nome]);
        return {"id" : registro.insertId, nome};
    }

}

export default FuncionarioRepository;