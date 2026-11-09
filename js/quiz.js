
// ========================================
// QUIZ EDUCATIVO - CONECTA
// ========================================

const questions = [

    {
        question: "O que caracteriza uma situação de bullying?",
        options: [
            "Qualquer desentendimento entre colegas.",
            "Uma agressão intencional e repetitiva em uma relação de desequilíbrio de poder.",
            "Uma brincadeira em que todos se divertem."
        ],
        answer: 1,
        explanation: "O bullying envolve violência intencional e repetitiva, com desequilíbrio de poder. Um conflito isolado também merece atenção, mas não é automaticamente bullying."
    },

    {
        question: "Qual destas situações é um exemplo de cyberbullying?",
        options: [
            "Enviar mensagens ofensivas e humilhar alguém nas redes sociais.",
            "Conversar com um amigo pela internet.",
            "Compartilhar uma notícia interessante."
        ],
        answer: 0,
        explanation: "Cyberbullying é a prática de agressões, humilhações ou intimidações por meios digitais, como redes sociais, aplicativos e jogos online."
    },

    {
        question: "O que você deve fazer ao presenciar uma situação de bullying?",
        options: [
            "Filmar e compartilhar para mostrar aos amigos.",
            "Rir junto para não ser excluído.",
            "Apoiar quem está sofrendo e procurar um adulto de confiança."
        ],
        answer: 2,
        explanation: "Apoiar a pessoa e comunicar a situação a um adulto responsável são atitudes importantes. Não é necessário enfrentar os envolvidos sozinho."
    },

    {
        question: "Qual atitude pode ser considerada bullying social?",
        options: [
            "Convidar um colega para participar de um trabalho.",
            "Excluir intencionalmente alguém do grupo e incentivar outras pessoas a fazerem o mesmo.",
            "Discordar respeitosamente de uma opinião."
        ],
        answer: 1,
        explanation: "A exclusão intencional e a tentativa de isolar alguém podem fazer parte do bullying social."
    },

    {
        question: "Uma pessoa que sofre bullying deve:",
        options: [
            "Guardar tudo para si e não contar a ninguém.",
            "Tentar resolver tudo usando violência.",
            "Procurar apoio de um adulto de confiança e contar o que está acontecendo."
        ],
        answer: 2,
        explanation: "Pedir ajuda é importante. A pessoa que sofre bullying não tem culpa e merece ser acolhida e protegida."
    },

    {
        question: "Qual alternativa apresenta uma atitude de respeito?",
        options: [
            "Respeitar as diferenças e os limites das outras pessoas.",
            "Fazer piadas com características físicas de alguém.",
            "Espalhar boatos sobre um colega."
        ],
        answer: 0,
        explanation: "Respeitar as diferenças, ouvir as pessoas e não ultrapassar seus limites ajuda a construir uma convivência saudável."
    },

    {
        question: "Por que é importante que a escola intervenha em situações de bullying?",
        options: [
            "Porque os estudantes devem resolver tudo sozinhos.",
            "Porque a escola deve promover segurança, acolhimento e respeito.",
            "Porque somente quem sofre precisa mudar de comportamento."
        ],
        answer: 1,
        explanation: "A escola tem responsabilidade na prevenção e no enfrentamento da violência, acolhendo os envolvidos e acompanhando as situações."
    },

    {
        question: "Se alguém fizer uma agressão isolada, sem repetição, isso deve ser ignorado?",
        options: [
            "Sim, porque só situações repetidas importam.",
            "Sim, se a pessoa disser que era brincadeira.",
            "Não. Toda agressão deve ser levada a sério, mesmo quando não caracteriza bullying."
        ],
        answer: 2,
        explanation: "Mesmo uma agressão isolada precisa de atenção e pode exigir intervenção. Nem toda violência é bullying, mas nenhuma deve ser simplesmente ignorada."
    }

];


// ELEMENTOS DA PÁGINA

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const quizOptions = document.getElementById("quiz-options");
const quizCounter = document.getElementById("quiz-counter");
const quizProgress = document.getElementById("quiz-progress");
const quizProgressText = document.getElementById("quiz-progress-text");
const quizFeedback = document.getElementById("quiz-feedback");
const nextButton = document.getElementById("next-question");

const quizGame = document.getElementById("quiz-game");
const quizResult = document.getElementById("quiz-result");

const resultIcon = document.getElementById("result-icon");
const resultTitle = document.getElementById("result-title");
const resultScore = document.getElementById("result-score");
const resultMessage = document.getElementById("result-message");

const restartButton = document.getElementById("restart-quiz");


// ESTADO DO QUIZ

let currentQuestion = 0;
let score = 0;
let answered = false;


// MOSTRAR PERGUNTA

function showQuestion() {

    answered = false;

    const question = questions[currentQuestion];

    questionNumber.textContent =
        `PERGUNTA ${String(currentQuestion + 1).padStart(2, "0")}`;

    questionText.textContent = question.question;

    quizCounter.textContent =
        `${currentQuestion + 1} de ${questions.length}`;

    const progress = (currentQuestion / questions.length) * 100;

    quizProgress.style.width = `${progress}%`;

    quizProgressText.textContent =
        `${Math.round(progress)}% concluído`;

    quizOptions.innerHTML = "";

    quizFeedback.hidden = true;
    quizFeedback.textContent = "";
    quizFeedback.className = "quiz-feedback";

    nextButton.hidden = true;

    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "quiz-option";

        const letter = document.createElement("span");
        letter.className = "option-letter";
        letter.textContent = String.fromCharCode(65 + index);

        const text = document.createElement("span");
        text.className = "option-text";
        text.textContent = option;

        button.appendChild(letter);
        button.appendChild(text);

        button.addEventListener("click", () => {
            checkAnswer(index);
        });

        quizOptions.appendChild(button);

    });

}


// CORRIGIR RESPOSTA

function checkAnswer(selectedIndex) {

    if (answered) return;

    answered = true;

    const question = questions[currentQuestion];

    const optionButtons = quizOptions.querySelectorAll(".quiz-option");

    optionButtons.forEach((button, index) => {

        button.disabled = true;

        if (index === question.answer) {
            button.classList.add("correct");
        }

        if (index === selectedIndex && selectedIndex !== question.answer) {
            button.classList.add("incorrect");
        }

    });


    if (selectedIndex === question.answer) {

        score++;

        quizFeedback.className = "quiz-feedback feedback-correct";

        quizFeedback.innerHTML = `
            <strong>🎉 Muito bem! Você acertou!</strong>
            <p>${question.explanation}</p>
        `;

    } else {

        quizFeedback.className = "quiz-feedback feedback-incorrect";

        quizFeedback.innerHTML = `
            <strong>💡 Não foi dessa vez!</strong>
            <p>${question.explanation}</p>
        `;

    }

    quizFeedback.hidden = false;

    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = "Ver meu resultado →";
    } else {
        nextButton.textContent = "Próxima pergunta →";
    }

    nextButton.hidden = false;

}


// PRÓXIMA PERGUNTA

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }

}


// MOSTRAR RESULTADO

function showResult() {

    quizGame.hidden = true;
    quizResult.hidden = false;

    quizProgress.style.width = "100%";
    quizProgressText.textContent = "100% concluído";

    quizCounter.textContent = "Concluído";

    resultScore.textContent =
        `${score}/${questions.length}`;

    const percentage = (score / questions.length) * 100;

    if (percentage === 100) {

        resultIcon.textContent = "🏆";
        resultTitle.textContent = "Incrível! Você acertou tudo!";
        resultMessage.textContent =
            "Você demonstrou muito conhecimento sobre respeito e combate ao bullying. Continue espalhando essas atitudes!";

    } else if (percentage >= 70) {

        resultIcon.textContent = "🌟";
        resultTitle.textContent = "Muito bem!";
        resultMessage.textContent =
            "Você está no caminho certo! Aprendeu bastante sobre como reconhecer e combater o bullying.";

    } else if (percentage >= 40) {

        resultIcon.textContent = "💜";
        resultTitle.textContent = "Bom começo!";
        resultMessage.textContent =
            "Você já conhece alguns pontos importantes. Continue aprendendo para ajudar a construir uma escola melhor.";

    } else {

        resultIcon.textContent = "🌱";
        resultTitle.textContent = "Vamos aprender juntos!";
        resultMessage.textContent =
            "O importante é continuar aprendendo. Explore a página Conheça o Bullying e tente novamente!";

    }

}


// REINICIAR QUIZ

function restartQuiz() {

    currentQuestion = 0;
    score = 0;
    answered = false;

    quizResult.hidden = true;
    quizGame.hidden = false;

    showQuestion();

}


// EVENTOS

nextButton.addEventListener("click", nextQuestion);

restartButton.addEventListener("click", restartQuiz);


// INICIAR

showQuestion();
