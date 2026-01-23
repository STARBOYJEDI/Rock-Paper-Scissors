const readline = require("readline");
// const prompt = require("prompt-sync")({sigint: true});

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
    //const randomIndex = Math.floor(Math.random() * choices.length); // Generate a random index between 0 and 2
    // return choices[randomIndex]; // Returns a random element from the choices array
}
// console.log(getComputerChoice());

// function getHumanChoice() {
//     const choices = ['rock', 'paper', 'scissors'];
//     const userInput = prompt("Enter rock, paper, or scissors: ");
//     if (choices.includes(userInput)) {
//         return userInput;
//     } else {
//         console.log("Invalid input. Please try again.");
//         return getHumanChoice(); // Recursively prompt until valid input is received
//     }
// }

function getHumanChoice() {
    return new Promise(resolve => {
        r1.question("Enter rock, paper, or scissors: ", answer => {
            const input = answer.trim().toLowerCase();
            const choices = ['rock', 'paper', 'scissors'];
            if (choices.includes(input)) {
                resolve(input);
            } else {
                console.log("Invalid input. Try again.");
                resolve(getHumanChoice()); // Recursively prompt until valid input is received
            }
        });
    });
}

async function playRound(humanChoice, computerChoice) {
    console.log("You chose: " + humanChoice);
    console.log("Computer chose: " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("user");
    } else {
        console.log("computer");
    }
}

async function startGame() {
    let humanScore = 0; // Initialize variables with a 0 value.
    let computerScore = 0; // Initialize variables with a 0 value.

    const totalRounds = 5; //Initialize Rounds variable with a value of 5.

    for (let round = 1; round <= totalRounds; round++)  { // Makes sure that there's only 5 rounds
        console.log(`\nRound ${round} of ${totalRounds}`);

        const humanSelection = await getHumanChoice();
        const computerSelection = getComputerChoice();

        const winner = playRound(humanSelection, computerSelection);

        if (winner === "user") {
            humanScore++;
            console.log("You win this round!");
        } else if (winner === "computer") {
            computerScore++;
            console.log("Computer wins this round!");
        } else {
            console.log("This round is a tie!")
        }

        console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
    }

    console.log("\n--- FINAL RESULT ---");
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game ends in a tie!");
    }

    r1.close();
}

startGame();














