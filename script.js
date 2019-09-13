var currentQuestion= 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById("Quizcontainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextbutton = document.getElementById("nextbtn");
var resultcont = document.getElementById("resultcontainer");

function loadQuestion (questionIndex){
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1)+"."+" "+q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
}

function loadNextQuestion(){
    var selected = document.querySelector('input[type=radio]:checked');
    if(!selected){
        alert("Please select your answer!");
        return;
    }
    var answer = selected.value;
    if(questions[currentQuestion].answer == answer){
        score+=10;
    }
    selected.checked = false;
    currentQuestion+=1;
    if(currentQuestion == totQuestions-1){
        nextbutton.textContent = "FINISH";
    }
    if(currentQuestion == totQuestions){
        container.style.display = 'none';
        resultcont.style.display ='';
        resultcont.textContent = "Your score:"+score;
        return;
    }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);