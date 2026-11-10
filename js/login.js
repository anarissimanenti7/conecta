
const formularioLogin = document.getElementById("form-login");
const campoEmail = document.getElementById("email-login");
const campoSenha = document.getElementById("senha-login");
const botaoMostrarSenha = document.getElementById("mostrar-senha");
const retornoLogin = document.getElementById("retorno-login");

// Mostrar ou esconder a senha
botaoMostrarSenha.addEventListener("click", () => {
    const senhaEstaOculta = campoSenha.type === "password";

    campoSenha.type = senhaEstaOculta ? "text" : "password";
    botaoMostrarSenha.textContent = senhaEstaOculta ? "Ocultar" : "Mostrar";
    botaoMostrarSenha.setAttribute(
        "aria-label",
        senhaEstaOculta ? "Ocultar senha" : "Mostrar senha"
    );
});

// Envio do formulário
formularioLogin.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = campoEmail.value.trim();
    const senha = campoSenha.value;

    if (!email || !senha) {
        retornoLogin.textContent = "Preencha seu e-mail e sua senha.";
        retornoLogin.className = "login-feedback error";
        return;
    }

    // A autenticação real será feita pelo Supabase.
    // Não armazenamos nem validamos senhas nesta demonstração.
    retornoLogin.textContent =
        "A tela está pronta! O acesso será liberado quando conectarmos a autenticação segura do Supabase.";

    retornoLogin.className = "login-feedback info";
});
