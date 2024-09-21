let gameResult = document.getElementById("gameResult");
let inputValue = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let gussedInput = parseInt(inputValue.value);

    if (gussedInput > randomNumber) {
        gameResult.textContent = "To High, Try Again.....";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (gussedInput < randomNumber) {
        gameResult.textContent = "To Low, Try Again...";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (gussedInput === randomNumber) {
        gameResult.textContent = "Congratulations You Got It Right....";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Provided A Valid Input";
        gameResult.style.backgroundColor = "red";
    }
}