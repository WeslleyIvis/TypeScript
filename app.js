"use strict";
async function fetchProduct() {
    const r = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await r.json();
    console.log(data);
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
        <div>
            <h2>${data.nome}</h2>
            <p>${data.preco}</p>
            <div><h2>${data.empresaFabricante.nome}</h2></div>
            <div><h2>${data.empresaMontadora.nome}</h2></div>
        </div>
    `;
}
