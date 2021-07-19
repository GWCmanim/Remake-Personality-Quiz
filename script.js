
var questionCount = 0; //Store the number of answers clicked on
 
 var lokiScore = 0;
 var draxScore = 0; 

var q1a1 = document.getElementById ("q1a1");
var q1a2 = document.getElementById ("q1a2");

var q2a1 = document.getElementById ("q2a1");
var q2a2 = document.getElementById ("q2a2");

var q3a1 = document.getElementById ("q3a1");
var q3a2 = document.getElementById ("q3a2");

var q4a1 = document.getElementById ("q4a1");
var q4a2 = document.getElementById ("q4a2");

var q5a1 = document.getElementById ("q5a1");
var q5a2 = document.getElementById ("q5a2");

var q6a1 = document.getElementById ("q6a1");
var q6a2 = document.getElementById ("q6a2");

var q7a1 = document.getElementById ("q7a1");
var q7a2 = document.getElementById ("q7a2");


var restart = document.getElementById ("restart");





q1a1.addEventListener("click",drax);
q1a2.addEventListener("click", loki);

q2a1.addEventListener("click",drax);
q2a2.addEventListener("click", loki);

q3a1.addEventListener("click",loki );
q3a2.addEventListener("click", drax);

q4a1.addEventListener("click", loki);
q4a2.addEventListener("click", drax);

q5a1.addEventListener("click", drax);
q5a2.addEventListener("click", loki);

q6a1.addEventListener("click", drax);
q6a2.addEventListener("click", loki);

q7a1.addEventListener("click", loki);
q7a2.addEventListener("click", drax);


restart.addEventListener("click", restartQuiz);




function loki(){
  lokiScore += 1;
  questionCount += 1;
  console.log("questionCount =" + questionCount + "lokiScore = "+ lokiScore);

  if (questionCount == 7) {
    console.log("The quiz is done")
    updateResult();
  }
}


function updateResult(){
  if(lokiScore >4){
    result.innerHTML = ("Loki")
  console.log("Loki");
  } else if (lokiScore >= 4) {result.innerHTML ="Drax"; 
  console.log("Drax");
  }

}




function drax(){
  draxScore += 1;
  questionCount += 1;
  console.log("questionCount =" + questionCount + "draxScore = "+ draxScore);

  if (questionCount == 7) {
    console.log("The quiz is done" )
    updateResult();
  }
} 

function updateResult(){
  if(draxScore >4){
    result.innerHTML = ("Drax")
    console.log("Drax");
  }  else if (draxScore >= 4) {result.innerHTML ="Loki"; 
  console.log("Loki");
  }

}




function restartQuiz() {
  myAns=0;
  notmyAns=0;
  questionAns=0;
  result.innerHTML= "your result is..."
  }
