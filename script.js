let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const div = document.querySelector("#choices");
const scores = document.querySelector("#scores");

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if (choice === 0){
        return "Rock";
    }
    else if (choice === 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}
function playRound(humanChoice){
    let compChoice = getComputerChoice();
    let results = document.createElement("p");
    let humanScoreHtml = document.querySelector("#humanScore");
    let computerScoreHtml = document.querySelector("#computerScore")
    if (compChoice == humanChoice){
        results.textContent = "Draw";
        div.appendChild(results);
    }
    else if (compChoice == "Rock" && humanChoice == "Paper"){
        results.textContent = "Human Wins"
        humanScore+=1;
        div.appendChild(results);
    }
    else if (compChoice == "Rock" && humanChoice == "Scissors"){
        results.textContent = "Computer Wins"
        computerScore+=1;
        div.appendChild(results);
    }
    else if (compChoice == "Scissors" && humanChoice == "Paper"){
        results.textContent = "Computer Wins"
        computerScore+=1;
        div.appendChild(results);
    }
    else if (compChoice == "Scissors" && humanChoice == "Rock"){
        results.textContent = "Human Wins"
        humanScore+=1;
        div.appendChild(results);
    }
    else if (compChoice == "Paper" && humanChoice == "Scissors"){
        results.textContent = "Human Wins"
        humanScore+=1;
        div.appendChild(results);
    }
    else if (compChoice == "Paper" && humanChoice == "Rock"){
        results.textContent = "Computer Wins"
        computerScore+=1;
        div.appendChild(results);
    }
    humanScoreHtml.textContent = `${humanScore}`;
    computerScoreHtml.textContent = `${computerScore}`;
}
function playGame() {
    const maxScore = 5;
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (humanScore < maxScore && computerScore < maxScore) {
                playRound(button.id);
                if (humanScore === maxScore || computerScore === maxScore) {
                    let winner = humanScore > computerScore ? "Human" : "Computer";
                    const resultMsg = document.createElement("p");
                    resultMsg.textContent = `${winner} wins with ${maxScore} points!`;
                    div.appendChild(resultMsg);
                    // Disable all buttons
                    buttons.forEach(btn => btn.disabled = true);
                }
            }
        });
    });
}

playGame();