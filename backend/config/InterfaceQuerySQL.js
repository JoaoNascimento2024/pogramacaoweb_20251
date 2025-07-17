import connection from "./ConnectMySQL.js";

const InterfaceQuery = {
    async query(sql, params) {
        try {
            const results = await connection.query(sql, params);
            return results;
        }catch(err){
            console.log("Erro na execução do sql", err.message);
            throw err;
        }
    }
}

export default InterfaceQuery;

