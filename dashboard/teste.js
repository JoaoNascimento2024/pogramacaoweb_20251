let valor = 15;

if (!valor){
    console.log("Entrou na negação")
}

if (valor > 17 || valor > 12) {
console.log("Entrou no IF");
console.log(valor);
}else {
console.log("Entrou no ELSE")
}

if (2 === "2"){
    console.log("Iguais")
}

let contador = 0;
while (contador < 10){
    console.log(contador)
    contador++;
}

do {
    console.log(contador)
    contador--;
}while(contador > 1);

for (let i=0;i<10;i++){
    console.log(i);
}

let numeros = [1,2,3,4,5]
numeros.push(6)

function nomeFuncao(parametro){
    console.log(parametro)
}

numeros.forEach(nomeFuncao);

numeros.forEach(numero => console.log(numero));




