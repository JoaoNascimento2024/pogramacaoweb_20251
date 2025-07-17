import express from "express";
import connection from "./config/ConnectMySQL.js";
import FuncionarioRouter from "./routers/FuncionarioRouter.js";

const app = express();
app.use(express.json());

app.use("/funcionarios",FuncionarioRouter);

const PORT = 5000;
app.listen(PORT,() => {
    console.log("Servidor inicializado");
});