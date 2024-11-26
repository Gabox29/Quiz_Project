quizzes = JSON.parse(localStorage.getItem("Quizzes"));
let dates = []
let dataPoints = []

quizzes.data.forEach(quiz => {
  dates.push(quiz.date)
  dataPoints.push(quiz.numAnswersRight)
});


const myChart = new Chart('myChart', {
  type: 'bar',
  data: {
    labels: dates.slice(-6),
    datasets: [{
      label: 'Nº correct Answers',
      data: dataPoints.slice(-6),
      backgroundColor: '#333333', 
      borderColor: '#333333', 
      borderWidth: 1, 
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true 
      }
    }
  }
});