let input = document.getElementById('input')
let btn = document.getElementById('btn')
let wrong = document.querySelector('.wrong')
let guess = document.getElementById('guesses')

let answer = Math.floor(Math.random() * 100) + 1

let numGuess = 0

btn.addEventListener('click', () => {
    guessNumber()
})

function resetGame() {
    input.value = ''
    wrong.innerHTML = ''
    guess.innerHTML = 'No. of Guess : 0'
}

function guessNumber() {
    if (input.value < 1 || input.value > 100 || isNaN(input.value)){
        wrong.innerHTML = `Enter a valid number between 1 to 100`
    }
    else {
        numGuess ++;
        guess.innerHTML = `No. of guess : ` + numGuess
        if(input.value > answer) {
            wrong.innerHTML = `Your guess was way high`
            input.value = ''
        }
        else if (input.value < answer) {
            wrong.innerHTML = `Your guess was so low`
            input.value = ''
        }
        else {
            wrong.innerHTML = `Yay your guess hit the mark!  The number was ${answer}`
            btn.disabled = true
            setTimeout(() => {
                resetGame()
            }, 5000);
        }
    }
    

}