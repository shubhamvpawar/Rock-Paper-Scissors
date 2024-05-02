let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
console.log(choices);

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = () => {
    console.log("Game was drawn");
    msg.innerText = "Game was draw play again"
    msg.style.backgroundColor = "gray";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You WIN !!");
        msg.innerText = `You Win. Your ${userChoice} beats Comp's ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You LOSE !!");
        msg.innerText = `You Lose. Comp's ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice is =", userChoice)
    //Generete comp choice
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice)

    if (userChoice === compChoice) {
        //DRaw game
        drawGame();
    } else {
        //User Win
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, apaper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //paper, rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    };
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choices were clicked", userChoice);
        playGame(userChoice);
    });
});