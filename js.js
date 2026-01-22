const readline = require("readline");
// const prompt = require("prompt-sync")({sigint: true});

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length); // Generate a random index between 0 and 2
    return choices[randomIndex]; // Returns a random element from the choices array
}
console.log(getComputerChoice());

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


















