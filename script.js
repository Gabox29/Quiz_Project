const homePage = document.getElementById("home-page");
const questionPage = document.getElementById("question-page");
const resultsPage = document.getElementById("results-page");

const startQuizBtn = document.getElementById("btn-start-quiz");
// const resetQuizBtn = document.getElementById("btn-reset-quiz")

const goToPage = (page) => {
  homePage.classList.add("hide");
  questionPage.classList.add("hide");
  resultsPage.classList.add("hide");

  page.classList.remove("hide");
};

const loadQuestionHTML = () => {
  questionPage.innerHTML = `
                        dasd   `;
};

const startingQuiz = (e) => {
  e.preventDefault();
  goToPage(questionPage);
};

startQuizBtn.addEventListener("click", startingQuiz);

goToPage(homePage);
