const homePage = document.getElementById("home-page");
const questionPage = document.getElementById("question-page");
const resultsPage = document.getElementById("results-page");

const startQuizBtn = document.getElementById("btn-start-quiz");
const nextQuestionBtn = document.getElementById("btn-next-question");
// const resetQuizBtn = document.getElementById("btn-reset-quiz") // results page

const API_URL = "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple";

let current_question_index = 0;

let questions;
const getquestions = async () => {
  const res = await axios.get(API_URL);
  questions = res.data.results;
  console.log(questions[4]); // remove this line after
};
getquestions();

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at index i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const goToPage = (page) => {
  homePage.classList.add("hide");
  questionPage.classList.add("hide");
  resultsPage.classList.add("hide");

  page.classList.remove("hide");
};

const loadQuestion = (questionNum) => {
  const questionData = questions[questionNum];
  const correct_answer = questionData.correct_answer;
  const all_answers = shuffleArray([correct_answer, ...questionData.incorrect_answers]);

  const formToFill = document.getElementById("form-container");
  formToFill.innerHTML = `<fieldset>
                            <legend>${questionData.question}</legend>
                            <div class="form-check">
                              <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="option1">
                              <label class="form-check-label" for="optionsRadios1"></label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                              <label class="form-check-label" for="optionsRadios2"></label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios3" value="option3">
                              <label class="form-check-label" for="optionsRadios3"></label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios4" value="option4">
                              <label class="form-check-label" for="optionsRadios4"></label>
                            </div>
                          </fieldset>`;

  document.querySelectorAll(".form-check").forEach((OptionDiv, index) => {
    const input = OptionDiv.children[0];
    const label = OptionDiv.children[1];
    const answer = all_answers[index];

    input.setAttribute("value", answer);
    label.innerHTML = answer;
  });

  if (!current_question_index) {
    // results page with reset function
  }
};

const startingQuiz = (e) => {
  e.preventDefault();
  goToPage(questionPage);
  loadQuestion(current_question_index);
};

const nextQuesionLogic = (e) => {
  e.preventDefault();
  const selectedOption = document.querySelector('input[name="optionsRadios"]:checked');

  if (!selectedOption) {
    const feedback = document.getElementById("feedback");
    feedback.innerHTML = "Please choose an answer";
  }
};

startQuizBtn.addEventListener("click", startingQuiz);
nextQuestionBtn.addEventListener("click", nextQuesionLogic)

goToPage(homePage);
