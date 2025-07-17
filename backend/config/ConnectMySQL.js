import mysql from "mysql";
import util from "util";

const dbConfig = {
    host : "localhost",
    user : "root",
    password : "",
    database : "redes4"
}

const connection = mysql.createConnection(dbConfig);

connection.connect((erro) => {
    if (erro) {
        console.log("Erro na conexão", erro.message);
        process.exit(1);
    }
    console.log("Sucesso na conexão");
});

connection.query = util.promisify(connection.query).bind(connection);

export default connection;
