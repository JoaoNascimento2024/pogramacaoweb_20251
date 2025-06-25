
const rotear = nomeRota => {
    switch (nomeRota) {
        case "home":
            console.log("Você está no home");
            break;
        case "produtos":
            console.log("Você está no produtos");
            break;
        case "clientes":
            console.log("Você está no clientes");
            break;
        case "contatos":
            console.log("Você está no contatos");
            break;
    }
}


const inicializar = () => {
    document.querySelectorAll("[rota]")
};


window.onload = inicializar; 
