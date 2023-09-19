let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessFeild'); 
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultparas');

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',(e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Enter a Valid number')
    }
    else if(guess > 100){
        alert('Enter a number less than 100')
    }
    else if(guess < 1 ){
        alert('Enter a number more than 1')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 10){
           displayGuess(guess)
           displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('Congrats! you guessed it right')
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage('Number is too low')
    }
    else if(guess > randomNumber){
        displayMessage('Number is too high')
     }
 }

function displayGuess(guess){
    //It's a cleanup function
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `${message}`
}

function endGame(guess){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame" > Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}


function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', (e) => {
         randomNumber = parseInt(Math.random() * 100 + 1);
         prevGuess = [];
         numGuess = 1;
         guessSlot.innerHTML =''
         remaining.innerHTML = `${11 - numGuess}`
         userInput.removeAttribute('disabled')
         startOver.removeChild(p)
         lowOrHigh.innerHTML = ""
         playGame = true
    })
}
