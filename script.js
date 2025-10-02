// Quiz data
const quizData = [
  { question: "Milk mixed with water", correct: "adulterated" },
  { question: "Organic fresh fruits", correct: "safe" },
  { question: "Turmeric with lead salts", correct: "adulterated" },
  { question: "Sugar without any additives", correct: "safe" },
  { question: "Tea leaves with coal tar dyes", correct: "adulterated" }
];

let currentQuestion = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question").innerText = q.question;
  document.getElementById("feedback").innerText = "";
}

function checkAnswer(answer) {
  const q = quizData[currentQuestion];
  let feedback = document.getElementById("feedback");
  if (answer === q.correct) {
    feedback.innerText = "✅ Correct!";
    feedback.style.color = "green";
  } else {
    feedback.innerText = "❌ Wrong! It is " + q.correct.toUpperCase();
    feedback.style.color = "red";
  }

  // Load next question after 2 sec
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      document.getElementById("quiz-container").innerHTML = "<h2>🎉 Quiz Finished! Great Job!</h2>";
    }
  }, 2000);
}

// Start quiz
if (document.getElementById("question")) {
  loadQuestion();
}
