const rockBtn = document.getElementsByClassName("rock");
const paperBtn = document.getElementsByClassName("paper");
const scissorsBtn = document.getElementsByClassName("scissors");

var options = document.querySelectorAll(".btn").length;

for (i=0; i<options; i++){

document.querySelectorAll(".btn")[i].addEventListener("click", function (){
    if (document.getElementsByClassName("rock")) {
        document.querySelectorAll("p")[1].innerHTML = "You chose Rock";
    }
    else if (paperBtn) {
        document.querySelectorAll("p")[1].innerHTML = "You chose Paper";
    }

    else {
        document.querySelectorAll("p")[1].innerHTML = "You chose Scissors";
    }
    
    console.log("got clicked");
});

}

// const options = ["rock" ,"paper", "scissors"];
var randomChoice = Math.floor(Math.random() * 3);

document.querySelectorAll("p")[0].innerHTML = randomChoice;
// // var randomBtn = "btns" + randomChoice;

// // var randomValue = document.querySelectorAll("btns") [0];

// // randomValue.setAttribute("computerChoice" , randomBtn);


// var buttonChoice = document.getElementsByClassName("btns");
// var yourChoice = document.querySelectorAll("input") [1];

// yourChoice.setAttribute("buttonChoice" , yourChoice);