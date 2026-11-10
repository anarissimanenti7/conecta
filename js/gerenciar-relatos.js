
// Registros fictícios para demonstrar o funcionamento da página.
// Depois, esses dados virão do Supabase.
const relatosDemonstrativos = [
    {
        codigo: "REL-001",
        tipo: "Bullying verbal",
        local: "Sala de aula",
        data: "08/11/2026",
        descricao: "Relato demonstrativo sobre apelidos ofensivos repetidos entre colegas.",
        status: "Pendente"
    },
    {
        codigo: "REL-002",
        tipo: "Cyberbullying",
        local: "Ambiente virtual",
        data: "07/11/2026",
        descricao: "Relato demonstrativo sobre mensagens ofensivas em um grupo virtual.",
        status: "Em acompanhamento"
    },
    {
        codigo: "REL-003",
        tipo: "Exclusão social",
        local: "Pátio",
        data: "06/11/2026",
        descricao: "Relato demonstrativo sobre exclusão recorrente de atividades em grupo.",
        status: "Encaminhado"
    },
    {
        codigo: "REL-004",
        tipo: "Bullying psicológico",
        local: "Corredor",
        data: "05/11/2026",
        descricao: "Relato demonstrativo sobre intimidação e constrangimento recorrentes.",
        status: "Pendente"
    }
];

const listaRelatos = document.getElementById("lista-relatos");
const filtroStatus = document.getElementById("filtro-status");
const campoBusca = document.getElementById("buscar-relato");
const mensagemVazia = document.getElementById("nenhum-relato");

// Atualiza os números do resumo.
function atualizarResumo() {
    document.getElementById("resumo-total").textContent =
        relatosDemonstrativos.length;

    document.getElementById("resumo-pendente").textContent =
        relatosDemonstrativos.filter(relato => relato.status === "Pendente").length;

    document.getElementById("resumo-acompanhamento").textContent =
        relatosDemonstrativos.filter(relato => relato.status === "Em acompanhamento").length;

    document.getElementById("resumo-encaminhado").textContent =
        relatosDemonstrativos.filter(relato => relato.status === "Encaminhado").length;
}

// Define a aparência do status.
function classeStatus(status) {
    if (status === "Pendente") return "status-pendente";
    if (status === "Em acompanhamento") return "status-acompanhamento";
    return "status-encaminhado";
}

// Cria os cartões dos registros.
function mostrarRelatos() {
    const statusSelecionado = filtroStatus.value;
    const busca = campoBusca.value.toLowerCase().trim();

    const relatosFiltrados = relatosDemonstrativos.filter(relato => {
        const combinaStatus =
            statusSelecionado === "todos" || relato.status === statusSelecionado;

        const textoRelato =
            `${relato.codigo} ${relato.tipo} ${relato.local}`.toLowerCase();

        const combinaBusca = textoRelato.includes(busca);

        return combinaStatus && combinaBusca;
    });

    listaRelatos.innerHTML = "";

    mensagemVazia.hidden = relatosFiltrados.length > 0;

    relatosFiltrados.forEach(relato => {
        const cartao = document.createElement("article");
        cartao.className = "report-card";

        const topo = document.createElement("div");
        topo.className = "report-card-top";

        const identificacao = document.createElement("div");

        const codigo = document.createElement("span");
        codigo.className = "report-code";
        codigo.textContent = relato.codigo;

        const titulo = document.createElement("h3");
        titulo.textContent = relato.tipo;

        identificacao.append(codigo, titulo);

        const status = document.createElement("span");
        status.className = `report-status ${classeStatus(relato.status)}`;
        status.textContent =
            relato.status === "Pendente"
                ? "Aguardando análise"
                : relato.status;

        topo.append(identificacao, status);

        const informacoes = document.createElement("div");
        informacoes.className = "report-metadata";

        const local = document.createElement("span");
        local.textContent = `📍 ${relato.local}`;

        const data = document.createElement("span");
        data.textContent = `📅 ${relato.data}`;

        informacoes.append(local, data);

        const descricao = document.createElement("p");
        descricao.className = "report-description";
        descricao.textContent = relato.descricao;

        const acoes = document.createElement("div");
        acoes.className = "report-card-actions";

        const label = document.createElement("label");
        label.textContent = "Atualizar situação:";

        const seletor = document.createElement("select");
        seletor.setAttribute("aria-label", `Situação do registro ${relato.codigo}`);

        const opcoes = [
            ["Pendente", "Aguardando análise"],
            ["Em acompanhamento", "Em acompanhamento"],
            ["Encaminhado", "Encaminhado"]
        ];

        opcoes.forEach(([valor, texto]) => {
            const opcao = document.createElement("option");
            opcao.value = valor;
            opcao.textContent = texto;
            seletor.appendChild(opcao);
        });

        seletor.value = relato.status;

        seletor.addEventListener("change", () => {
            relato.status = seletor.value;
            mostrarRelatos();
            atualizarResumo();
        });

        label.appendChild(seletor);
        acoes.appendChild(label);

        cartao.append(topo, informacoes, descricao, acoes);
        listaRelatos.appendChild(cartao);
    });
}

// Eventos dos filtros.
filtroStatus.addEventListener("change", mostrarRelatos);
campoBusca.addEventListener("input", mostrarRelatos);

// Exibe os registros ao abrir a página.
atualizarResumo();
mostrarRelatos();
