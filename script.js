const prompt = require("prompt-sync")({ sigint: true });



function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);

    if (rand === 0) {
        return "rock"
    } else if (rand === 1) {
        return "paper"
    } else if (rand === 2) {
        return "scissors"
    }
    return 0;
}

function getHumanChoice() {
    let choice = prompt("What is your choice? Rock, paper, or scissors? ")
    choice.toLowerCase().trim();

    // solve for case where non valid input is entered.

    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors");
        return "human";
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper");
        return "human";
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock");
        return "human";
    }
    else if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice + "!");
        return "computer";
    }

}

function playGame() {
    let round = 0;
    let humanScore = 0;
    let computerScore = 0;

    while (round < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const result = playRound(humanSelection, computerSelection);

        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }
        round++;
    }


    if (humanScore > computerScore) {
        console.log("After the final game, human wins!");
    } else if (humanScore === computerScore) {
        console.log("After the final game, it's a tie!");
    } else {
        console.log("After the final game.....darn, the computer wins.");
    }

    console.log("Final Score: Human: " + humanScore + " Computer Score: " + computerScore);
}

playGame();

