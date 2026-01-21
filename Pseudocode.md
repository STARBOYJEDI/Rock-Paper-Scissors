# First and foremost, how does rock, paper scissors work.
1. Two players each choose one of rock, paper or scissors.
2. Rock wins over scissors, scissors over paper, and paper over rock.
3. If both players choose the same item, it's a tie.

## Steps to take when generating code:
1. Create a new function named getComputerChoice.
    - The code should return string values of either: "rock", "paper" or "scissors".
2. Create a new function named getHumanChoice.
    - The code should return one of the valid choices that the user inputs.
3. Create two new variables named humanScore and computerScore in the global scope
    - Both the variables should be initialized to value of 0.
4. Create code for a single round.
    - Create a function called playRound.
    - Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
    - Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
    - Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
    - Increment the humanScore or computerScore variable based on the round winner.
5. The game will play for 5 rounds. Create a function called playGame that calls playRound to play rounds, keeps track of the scores and declares a winner at the end.
    - Create a function called playGame.
    - Move your playRound function and score variables so that they’re declared inside of the new playGame function.
    - Play 5 rounds by calling playRound 5 times.






