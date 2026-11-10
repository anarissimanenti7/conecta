
// Dados fictícios usados apenas para demonstrar o painel.
const dadosDemonstrativos = {
    totalRelatos: 24,
    pendentes: 8,
    acompanhamento: 10,
    encaminhados: 6,
    acoesRealizadas: 6
};

// Atualiza os indicadores da tela.
document.getElementById("total-relatos").textContent =
    dadosDemonstrativos.totalRelatos;

document.getElementById("relatos-pendentes").textContent =
    dadosDemonstrativos.pendentes;

document.getElementById("relatos-acompanhamento").textContent =
    dadosDemonstrativos.acompanhamento;

document.getElementById("acoes-realizadas").textContent =
    dadosDemonstrativos.acoesRealizadas;

// Calcula as porcentagens para as barras do gráfico.
const total = dadosDemonstrativos.totalRelatos;

const porcentagemPendente = (dadosDemonstrativos.pendentes / total) * 100;
const porcentagemAcompanhamento = (dadosDemonstrativos.acompanhamento / total) * 100;
const porcentagemEncaminhado = (dadosDemonstrativos.encaminhados / total) * 100;

// Atualiza as barras do gráfico.
document.querySelector(".pending-fill").style.width =
    `${porcentagemPendente}%`;

document.querySelector(".progress-fill").style.width =
    `${porcentagemAcompanhamento}%`;

document.querySelector(".completed-fill").style.width =
    `${porcentagemEncaminhado}%`;
