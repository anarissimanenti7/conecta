
const formularioMural = document.getElementById("form-mural");
const campoMensagem = document.getElementById("mensagem");
const contadorMensagem = document.getElementById("contador-mensagem");
const retornoMural = document.getElementById("retorno-mural");

// Atualiza a quantidade de caracteres digitados
campoMensagem.addEventListener("input", () => {
    const quantidade = campoMensagem.value.length;
    contadorMensagem.textContent = `${quantidade}/250 caracteres`;
});

// Recebe o envio do formulário
formularioMural.addEventListener("submit", (event) => {
    event.preventDefault();

    const apelido = document.getElementById("apelido").value.trim();
    const categoria = document.getElementById("categoria").value;
    const mensagem = campoMensagem.value.trim();
    const confirmacao = document.getElementById("confirmacao").checked;

    if (!categoria || !mensagem || !confirmacao) {
        retornoMural.textContent = "Preencha os campos obrigatórios antes de continuar.";
        retornoMural.className = "mural-feedback error";
        return;
    }

    if (mensagem.length < 5) {
        retornoMural.textContent = "Sua mensagem precisa ter pelo menos 5 caracteres.";
        retornoMural.className = "mural-feedback error";
        return;
    }

    // Nesta etapa, o envio é apenas demonstrativo.
    // Depois conectaremos o formulário ao Supabase.
    console.log({
        apelido: apelido || "Anônimo",
        categoria,
        mensagem
    });

    retornoMural.textContent =
        "Mensagem validada! Na versão completa, ela será encaminhada para análise antes de aparecer no mural.";

    retornoMural.className = "mural-feedback success";

    formularioMural.reset();
    contadorMensagem.textContent = "0/250 caracteres";
});
