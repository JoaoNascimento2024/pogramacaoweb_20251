import express from "express";
import FuncionarioController from "../controllers/FuncionarioController.js";

const FuncionarioRouter = express.Router();

FuncionarioRouter.get("/", FuncionarioController.getAll);
FuncionarioRouter.post("/", FuncionarioController.create);

export default FuncionarioRouter;