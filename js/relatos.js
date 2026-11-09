
const reportForm = document.getElementById("report-form");

const identificationOptions = document.querySelectorAll(
    'input[name="identificacao"]'
);

const identificationFields = document.getElementById(
    "identification-fields"
);

const reportFeedback = document.getElementById("report-feedback");


// MOSTRAR OU ESCONDER OS CAMPOS DE IDENTIFICAÇÃO

function updateIdentificationFields() {

    const selectedOption = document.querySelector(
        'input[name="identificacao"]:checked'
    );

    const isIdentified = selectedOption.value === "identificado";

    identificationFields.hidden = !isIdentified;

}

identificationOptions.forEach(option => {

    option.addEventListener("change", updateIdentificationFields);

});


// FORMULÁRIO

reportForm.addEventListener("submit", function(event) {

    event.preventDefault();

    reportFeedback.textContent =
        "A página está pronta, mas o envio real ainda será conectado ao Supabase. Seu relato não foi enviado.";

    reportFeedback.className = "report-feedback feedback-warning";

});


// ESTADO INICIAL

updateIdentificationFields();
