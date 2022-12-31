async function fetchProduct() {
    const r = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await r.json();
    console.log(data);
    showProduct(data);
}

fetchProduct();

interface Interprise {
    fundacao: number;
    nome: string;
    pais: string;
}

interface Product {
    nome: string;
    preco: number;
    garantia: string;
    descricao: string;
    seguroAcidentes: boolean;
    empresaFabricante: Interprise;
    empresaMontadora: Interprise;
}

function showProduct(data: Product) {
    document.body.innerHTML = `
        <div>
            <h2>${data.nome}</h2>
            <p>${data.preco}</p>
            <div><h2>${data.empresaFabricante.nome}</h2></div>
            <div><h2>${data.empresaMontadora.nome}</h2></div>
        </div>
    `
}