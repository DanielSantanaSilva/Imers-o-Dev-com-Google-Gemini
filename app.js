function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let resultados = ""

    // Para cada candidato dentro da lista de dados
    for (let candidato of candidatos) {
        resultados += `
        <div class="item-resultado">
        <h2>
            <a href= ${candidato.link} target="blank">${candidato.nome}, ${candidato.partido} </a>
        </h2>
        <p class="descricao-meta">${candidato.descricao}</p>
        </div>
    `
    }

    section.innerHTML = resultados
}





