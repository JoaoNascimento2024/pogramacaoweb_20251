import express from "express";

const app = express();
app.use(express.json());

//Exemplo para obter query string (parâmetros na url)
app.get("/home",(req, res) => {
    let nome = req.query.nome;
    res.send(`Bem vindo, ${nome}. Você tem ${req.query.idade} anos`);
});

//Exemplo para obter parâmetro na requisição
app.get("/home2/:id",(req,res) => {
    let id = req.params.id;
    res.send(`Seu id é ${id}`)
});

//Exemplo para obter dados via body
app.post("/home", (req, res)=> {
    const objeto = req.body;
    res.send(`${objeto.nome} é ${objeto.DadosFuncionais.cargo}`)
})

const PORT = 5000;
app.listen(PORT,() => {
    console.log("Servidor inicializado");
});