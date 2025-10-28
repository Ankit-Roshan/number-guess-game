let randomNum = Math.floor((Math.random() * 10) + 1);
console.log(randomNum)
let userInput = document.querySelector("#guessField")
let submit = document.querySelector("#subt");
let totalGes = document.querySelector(".guesses");
let remGes = document.querySelector(".lastResult");
let lastPara = document.querySelector(".resultParas")
let lowOrHi = document.querySelector(".lowOrHi");

let clrBtn = document.querySelector(".clear")

let p = document.createElement("p");

let prevGuess = [];
let numGes = 1;

let playGame = true;
let form = document.querySelector(".form");

form.addEventListener("click", function (e) {
    e.preventDefault;
})
if (playGame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        let guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
        userInput.value = ""

        // prevGuess.push(guess)
    })
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        lowOrHi.innerText = "Enter a valid Number"
    } else if (guess > 100) {
        lowOrHi.innerText = "Enter a Number less than 100"
    } else if (guess < 0) {
        lowOrHi.innerText = "Enter a Number Greater than 0"
    } else {
        prevGuess.push(guess)
        displayGuess(guess);
        checkGuess(guess);

        numGes++
        if (numGes > 3) {
            // prevGuess.push(guess)
            // displayGuess(guess);
            endGame()
            if (guess === randomNum) {
                lowOrHi.innerText = "COnGratulation, You Entered the right Number"
            } else {
                lowOrHi.innerText = "Game Over"
            }
        }
    }
}
function checkGuess(guess) {
    if (guess === randomNum) {
        lowOrHi.innerText = "COnGratulation, You Entered the right Number"
        endGame()
    } else if (guess < randomNum) {
        lowOrHi.innerText = "The Number you entered is too low"

    } else if (guess > randomNum) {
        lowOrHi.innerText = "The Number you entered is too High"

    }
}
function displayGuess() {
    let saraGuess = prevGuess.map(e => e);
    // console.log("ye raha : ",saraGuess);
    totalGes.innerText = saraGuess.join(", ");
    remGes.innerText = `${3 - numGes}`
}
clrBtn.addEventListener("click", (ee) => {
    ee.preventDefault();
    userInput.value = ""
    lowOrHi.innerText = ""
})


function endGame() {
    userInput.value = ""
    userInput.disabled = true
    // lowOrHi.innerText = ""
    submit.disabled = true
    playGame = true;

}

let restart = document.querySelector(".restart")


restart.addEventListener("click", () => {
    userInput.value = "";
    userInput.disabled = false;
    submit.disabled = false;
    lowOrHi.innerText = ""
    prevGuess = [];
    numGes = 1;
    totalGes.innerText = "";
    remGes.innerText = "3";
    randomNum = Math.floor((Math.random() * 10) + 1);
    console.log(randomNum)
    playGame = true;
})

let blkBtn = document.querySelector(".kalaBtn")

blkBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark")
    if (document.documentElement.classList.contains("dark")) {
        blkBtn.innerText = "Light"
    } else {
        blkBtn.innerText = "Dark"

    }
})
