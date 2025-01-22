let countID = 0;

const questions = [
  {
    questionText: "Was ist die Hauptstadt von Deutschland?",
    answers: [
      {
        text: "München",
        correct: false,
      },
      {
        text: "Berlin",
        correct: true,
      },
      {
        text: "Hannover",
        correct: false,
      },
      {
        text: "Hamburg",
        correct: false,
      },
    ],
  },
  {
    questionText: "Wie viele Bundesländer hat Deutschland?",
    answers: [
      {
        text: "16",
        correct: true,
      },
      {
        text: "17",
        correct: false,
      },
      {
        text: "12",
        correct: false,
      },
      {
        text: "15",
        correct: false,
      },
    ],
  },
  {
    questionText: "Was ist die Hauptstadt von Frankreich?",
    answers: [
      {
        text: "Madrid",
        correct: false,
      },
      {
        text: "Brüssel",
        correct: false,
      },
      {
        text: "Amsterdam",
        correct: false,
      },
      {
        text: "Paris",
        correct: true,
      },
    ],
  },
];

function getQuestion() {
  countID++;
  if (countID > 1) {
    document.getElementById("showQuestionWithAnswers").remove();
  }

  let correctAnswer = 0;
  let wrongAnswers = [];

  if (questions[countID - 1]) {
    const currentQuestion = questions[countID - 1];
    const answers = currentQuestion.answers;

    let a = 0;
    for (let i = 0; i < 4; i++) {
      if (answers[i].correct) {
        correctAnswer = answers[i];
      } else if (!answers[i].correct) {
        wrongAnswers[a] = answers[i];
        a++;
      }
    }

    displayQuestion(currentQuestion, correctAnswer, wrongAnswers);
  } else {
    countID = 0;
  }
}

function displayQuestion(currentQuestion, correctAnswer, wrongAnswers) {
  const showQuestionWithAnswers = document.createElement("div");
  showQuestionWithAnswers.classList.add("questionWithAnswers");
  showQuestionWithAnswers.id = "showQuestionWithAnswers";

  const showQuestion = document.createElement("div");
  showQuestion.classList.add("question");
  const showQuestionText = document.createTextNode(
    currentQuestion.questionText
  );
  showQuestion.appendChild(showQuestionText);

  const showAnswers = document.createElement("div");
  showAnswers.classList.add("answers");

  const buttonA = document.createElement("button");
  buttonA.classList.add("answer");

  const answerRandomABCD = Math.floor(Math.random() * 4);
  let z = 0; // Hilfsvariable beim Verteilen von den falschen Antworten, da das Array wrongAnswers nur 3 Elemente hat.
  if (answerRandomABCD == 0) {
    const buttonAText = document.createTextNode(correctAnswer.text);
    buttonA.setAttribute("onclick", `colorAnswer("ACorrect")`);
    buttonA.appendChild(buttonAText);
    z++;
  } else {
    const buttonAText = document.createTextNode(wrongAnswers[0].text);
    buttonA.setAttribute("onclick", `colorAnswer("AWrong")`);
    buttonA.appendChild(buttonAText);
  }

  buttonA.id = "buttonA";
  showAnswers.appendChild(buttonA);

  const buttonB = document.createElement("button");
  buttonB.classList.add("answer");
  if (answerRandomABCD == 1) {
    const buttonBText = document.createTextNode(correctAnswer.text);
    buttonB.setAttribute("onclick", `colorAnswer("BCorrect")`);
    buttonB.appendChild(buttonBText);
    z++;
  } else {
    const buttonBText = document.createTextNode(wrongAnswers[1 - z].text);
    buttonB.setAttribute("onclick", `colorAnswer("BWrong")`);
    buttonB.appendChild(buttonBText);
  }
  buttonB.id = "buttonB";
  showAnswers.appendChild(buttonB);

  const buttonC = document.createElement("button");
  buttonC.classList.add("answer");
  if (answerRandomABCD == 2) {
    const buttonCText = document.createTextNode(correctAnswer.text);
    buttonC.setAttribute("onclick", `colorAnswer("CCorrect")`);
    buttonC.appendChild(buttonCText);
    z++;
  } else {
    const buttonCText = document.createTextNode(wrongAnswers[2 - z].text);
    buttonC.setAttribute("onclick", `colorAnswer("CWrong")`);
    buttonC.appendChild(buttonCText);
  }
  showAnswers.appendChild(buttonC);
  buttonC.id = "buttonC";

  const buttonD = document.createElement("button");
  buttonD.classList.add("answer");
  if (answerRandomABCD == 3) {
    const buttonDText = document.createTextNode(correctAnswer.text);
    buttonD.setAttribute("onclick", `colorAnswer("DCorrect")`);
    buttonD.appendChild(buttonDText);
  } else {
    const buttonDText = document.createTextNode(wrongAnswers[3 - z].text);
    buttonD.setAttribute("onclick", `colorAnswer("DWrong")`);
    buttonD.appendChild(buttonDText);
  }
  showAnswers.appendChild(buttonD);
  buttonD.id = "buttonD";

  showQuestionWithAnswers.appendChild(showQuestion);
  showQuestionWithAnswers.appendChild(showAnswers);

  document
    .getElementById("displayQuestion")
    .appendChild(showQuestionWithAnswers);
}

function colorAnswer(x) {
  console.log(x);
  if (x === "AWrong") {
    document.getElementById("buttonA").classList.add("wrong");
    alert("Falsch!");
  } else if (x === "ACorrect") {
    document.getElementById("buttonA").classList.add("correct");
    alert("Richtig!");
  }

  if (x === "BWrong") {
    document.getElementById("buttonB").classList.add("wrong");
    alert("Falsch!");
  } else if (x === "BCorrect") {
    document.getElementById("buttonB").classList.add("correct");
    alert("Richtig!");
  }

  if (x === "CWrong") {
    document.getElementById("buttonC").classList.add("wrong");
    alert("Falsch!");
  } else if (x === "CCorrect") {
    document.getElementById("buttonC").classList.add("correct");
    alert("Richtig!");
  }

  if (x === "DWrong") {
    document.getElementById("buttonD").classList.add("wrong");
    alert("Falsch!");
  } else if (x === "DCorrect") {
    document.getElementById("buttonD").classList.add("correct");
    alert("Richtig!");
  }
}
