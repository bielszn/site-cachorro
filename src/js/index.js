const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");
const descricao = document.querySelector(".descricao"); // Seleciona a descrição

botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desativarBotaoSelecionado();
    marcarBotaoSelecionado(botao);

    esconderImagemAtiva();
    mostrarImagemDeFundo(indice);

    esconderInformacoesAtivas();
    mostrarInformacoes(indice);
    
    // Ajusta a descrição com base no botão clicado
    ajustarDescricao(indice);
  });
});

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function esconderInformacoesAtivas() {
  const informacoesAtiva = document.querySelector(".informacoes.ativa");
  informacoesAtiva.classList.remove("ativa");
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  botaoSelecionado.classList.remove("selecionado");
}

// Nova função para ajustar o tamanho da descrição
function ajustarDescricao(indice) {
    descricao.classList.remove("descricao-botao2"); // Remove a classe de descrição menor

    if (indice === 1) { // Caso do botão 2
        descricao.classList.add("descricao-botao2"); // Adiciona a classe de descrição menor
    }
}
