"use strict";
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    console.log(data);
    innerCursos(data);
}
fetchCursos();
function innerCursos(data) {
    data.forEach((data) => {
        let color;
        if (data.nivel === "iniciante") {
            color = 'blue';
        }
        else if (data.nivel === "avancado") {
            color = 'red';
        }
        document.body.innerHTML += `
        <div>
            <h3 style="background-color: ${color}">${data.nome}</h3>
            <p>Aulas: ${data.aulas}</p>
            <p>Horas: ${data.horas}</p>
            <p>Gratuito: ${data.gratuito ? 'sim' : 'não'}</p>
            <p>Tags: ${data.tags.join(' | ')}</p>
            <p>Id aulas: ${data.idAulas.join(' | ')}</p>
        </div>
    `;
    });
}
