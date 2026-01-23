const readline = require("readline");
// const prompt = require("prompt-sync")({sigint: true});

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)]; // Generate a random index between 0 and 2
}


async function getHumanChoice() {
    return new Promise((resolve) => { // Make the executor async
        r1.question("Enter rock, paper, or scissors: ", async (answer) => { // Make callback async
            const input = answer.trim().toLowerCase(); // Converts the input from to user to a lower case string
            const choices = ['rock', 'paper', 'scissors']; // Rock, paper, scissors array
            if (choices.includes(input)) { // If statement that executes code when the user input is valid
                resolve(input);
            } else {
                console.log("Invalid input. Try again.");
                resolve(await getHumanChoice()); // Await the recursive call
            }
        });
    });
}

function playRound(humanChoice, computerChoice) { // A function with parameters for the user and the computer
    console.log("You chose: " + humanChoice);
    console.log("Computer chose: " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("user");
        return "user";
    } else {
        console.log("computer");
        return "computer";
    }
}

async function startGame() { // Async function which assigns a value for the humanScore and computerScore and generates rules for the total rounds for the game
    let humanScore = 0; // Initialize variables with a 0 value.
    let computerScore = 0; // Initialize variables with a 0 value.

    const totalRounds = 5; // Initialize Rounds variable with a value of 5.

    for (let round = 1; round <= totalRounds; round++)  { // Makes sure that there's only 5 rounds
        console.log(`\nRound ${round} of ${totalRounds}`);

        const humanSelection = await getHumanChoice(); // Waits for the user to input a value (rock, paper, scissors)
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