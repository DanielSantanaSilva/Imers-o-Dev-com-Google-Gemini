// Script principal da aplicação

// Função para realizar a pesquisa

function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa")

    // 
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Se o campo de pesquisa for uma string vazia, não retorna nenhuma informação
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado, você não digitou o nome do candidato</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let nome = "";
    let partido = "";
    let descricao = "";


    // Itera sobre cada candidato na lista de candidatos (assumindo que 'candidatos' é um array)
    for (let candidato of candidatos) {
        nome = candidato.nome.toLowerCase()
        partido = candidato.partido.toLowerCase()
        descricao = candidato.descricao.toLowerCase()
        tags = candidato.tags.toLowerCase()

        //Se o nome includes campoPesquisa
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || partido.includes(campoPesquisa) | tags.includes(campoPesquisa)) {

            //Cria um novo elemento
            resultados += `
        <div class="item-resultado"> <h2> <a href="${candidato.link}" target="_blank"> ${candidato.nome}, ${candidato.partido} </a>
          </h2>
          <p class="descricao-meta">${candidato.descricao}</p> </div>
      `
        }
    }

    // Se não tiver resultados do campo pesquisa, retorna um texto informando que nada foi encontrado
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui a string com todos os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados
}
