import FuncionarioRepository from "../repositories/FuncioncionarioRepository.js";

const FuncionarioController = {
    async getAll(req, res) {
        try {
            const funcionarios = await FuncionarioRepository.findAll();
            res.json(funcionarios);
        }catch(err){
            res.status(500).json({erro : "Erro na busca de funcionários", err})
        }
    },

    async create(req, res) {
        const {nome} = req.body;
        try {
            const funcionario = FuncionarioRepository.createFuncionario(nome);
            res.status(201).json(funcionario);
        }catch(err){
            res.status(500).json({erro : "Erro na criação de funcionário", err})
        }
    }

}

export default FuncionarioController;