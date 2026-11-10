
const formularioTermometro = document.getElementById("form-termometro");
const retornoTermometro = document.getElementById("retorno-termometro");

formularioTermometro.addEventListener("submit", (event) => {
    event.preventDefault();

    const sentimento = document.querySelector('input[name="sentimento"]:checked');
    const respeito = document.querySelector('input[name="respeito"]:checked');
    const presenciou = document.querySelector('input[name="presenciou"]:checked');
    const ajuda = document.querySelector('input[name="ajuda"]:checked');
    const inclusao = document.querySelector('input[name="inclusao"]:checked');
    const sugestao = document.getElementById("sugestao").value.trim();

    const confirmacao = document.getElementById("confirmacao-pesquisa").checked;

    if (!sentimento || !respeito || !presenciou || !ajuda || !inclusao || !confirmacao) {
        retornoTermometro.textContent = "Responda todas as perguntas obrigatórias antes de enviar.";
        retornoTermometro.className = "thermo-feedback error";
        return;
    }

    // Demonstração: as respostas são apenas exibidas no console.
    // Posteriormente, conectaremos ao Supabase.
    const respostas = {
        sentimento: sentimento.value,
        respeito: respeito.value,
        presenciou: presenciou.value,
        ajuda: ajuda.value,
        inclusao: inclusao.value,
        sugestao: sugestao
    };

    console.log("Respostas da pesquisa:", respostas);

    retornoTermometro.textContent =
        "Obrigado por participar! Sua opinião é importante para construir uma escola melhor. 💜";

    retornoTermometro.className = "thermo-feedback success";

    formularioTermometro.reset();
});
