//pegar os botões

const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

//Indentificar o clique

botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener('click', () => {
    //AQUI IREI CHAMAR AS FUNÇÕES CRIADAS ABAIXO!

    //desmarcar botão selecionado anterior
    desativarBotaoSelecionado();

    //marcar o proximo botão selecionado
    AtivarBotaoSelecionado(botao);

    //esconder a imagem anterior selecionada
    EsconderImagemAnterior();

    //fazer aparecer a imagem correspondente ao botão clicado
    MostrarProximaImagem(indice);

    //esconder a informação do dragão selecionado
    EsconderInformacoesDragao();

    //mostrar a informação do dragão selecionado
    MostrarInformacoesProximoDragao(indice);
  });
});
//AQUI IREI CRIAR AS FUNÇÕES CHAMADAS ACIMA!
function MostrarInformacoesProximoDragao(indice) {
  informacoes[indice].classList.add("ativa");
}

function EsconderInformacoesDragao() {
  const informacoesAtiva = document.querySelector(".informacoes.ativa");
  informacoesAtiva.classList.remove("ativa");
}

function MostrarProximaImagem(indice) {
  imagens[indice].classList.add("ativa");
}

function EsconderImagemAnterior() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function AtivarBotaoSelecionado(botao) {
  botao.classList.add("selecionado");
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
