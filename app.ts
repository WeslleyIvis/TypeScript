// O type script ja é esperto suficiente para entender que uma variavel com um valor String, sempre vai ser uma string e virse versa 

let produto = "tablet";
let valor = 10;

let item = {
    nome: "carro",
    portas: 4,
}

// Inference
const baratoT: boolean | string = 200 < 400 ? true : "is spance"
const barato = 200 < 400 ? true : "is spance"


function mult(a: number, b: number) {
    return a * b
}

const nintendo = {
    nome: "Nintendo",
    valor: '1000'
}


function transformaPreco(produto: {nome: string, valor: string}) {
    produto.valor = `R$ ${produto.valor}`;
    return produto.valor;
}

const prodNovo = transformaPreco(nintendo);

console.log(prodNovo)