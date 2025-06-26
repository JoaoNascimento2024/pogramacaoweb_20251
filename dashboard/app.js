
const rotear = nomeRota => {
    switch (nomeRota) {
        case "home":
            document.querySelector(".content").innerHTML = "<h1>João no Home</h1>";
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
    document.querySelectorAll("[rota]").forEach(link => {
        link.addEventListener("click", (event) => {            
            document.querySelectorAll("[rota]").forEach(componente => 
                                            componente.classList.remove("menu_acionado"));
            let tag_a = event.target;
            tag_a.classList.add("menu_acionado");
            const name = tag_a.getAttribute("rota");
            rotear(name);
        })   
    })
};


window.onload = inicializar; 
