# Quiz Application

This is a simple web-based quiz application that fetches questions from an external API and tracks the user's progress with interactive results. The app is designed using HTML, CSS, JavaScript, and the Bootstrap framework, with charting functionality to display quiz statistics.

## Features

- **Start a Quiz**: The user can begin the quiz with a "Start Quiz" button.
- **Question Pages**: Users are presented with multiple-choice questions and can navigate through them.
- **Results Page**: After completing the quiz, users will see how many questions they answered correctly.
- **Quiz Statistics**: Displays a bar chart showing the number of correct answers over the last six quizzes.
- **Local Storage**: Tracks user quiz performance and saves the data locally in the browser using `localStorage`.
- **Try Again**: The option to retake the quiz and reset the quiz data.

## Technologies Used

- **HTML**: For the structure and layout of the web pages.
- **CSS**: For styling the application with a custom stylesheet and Bootstrap for responsive design.
- **JavaScript**: Handles the logic of the quiz, question loading, and storing results in local storage.
- **Chart.js**: Used to visualize the quiz statistics as a bar chart.
- **Axios**: For fetching quiz questions from an external API.

## File Breakdown

- **index.html**: The main HTML file that contains the structure of the application.
- **style.css**: The stylesheet for customizing the appearance of the quiz and ensuring a responsive layout.
- **script.js**: The JavaScript file that contains the logic for loading questions, tracking answers, and managing the quiz flow.
- **charts.js**: A JavaScript file that uses Chart.js to generate a bar chart with quiz statistics.
- **API**: The app fetches questions from the Open Trivia Database API (https://opentdb.com).

## API Used

The quiz fetches questions from the Open Trivia Database (https://opentdb.com), a free-to-use trivia API.

- Endpoint: `https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple`
- This endpoint returns 10 multiple-choice questions from the "Entertainment: Video Games" category, with easy difficulty.

## How It Works

1. When the user clicks the "Start Quiz" button, the app navigates to the question page and fetches 10 trivia questions from the API.
2. Each question is displayed with multiple-choice options. The user selects an answer and clicks "Next" to proceed to the next question.
3. After answering all the questions, the results page shows how many correct answers the user got.
4. The quiz statistics are saved in `localStorage`, which tracks how many correct answers were given for each quiz session.
5. A bar chart displays the user’s performance over the last six quizzes, with the number of correct answers shown on the y-axis.
