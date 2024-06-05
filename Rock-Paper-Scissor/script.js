let userScore = 0
let compScore = 0

const choices = document.querySelectorAll('.choice')
const msg = document.querySelector('#msg')

const userScorePara = document.querySelector('#user-score')
const compScorePara = document.querySelector('#comp-score')

const userChoicePara = document.querySelector('#user-choice')
const compChoicePara = document.querySelector('#comp-choice')

const genCompChoice = () => {
    let options = ['rock', 'paper', 'scissors']
    let randomInd = Math.floor(Math.random() * 3)
    return options[randomInd]
}

const drawGame = (userChoice, compChoice) => {
    msg.innerText = 'Game was Draw. Play again.';
    msg.style.backgroundColor = '#081b31'
    userChoicePara.innerText = `Choice: ${userChoice}`
    compChoicePara.innerText = `Choice: ${compChoice}`
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++
        userScorePara.innerText = userScore
        userChoicePara.innerText = `Choice: ${userChoice}`
        compChoicePara.innerText = `Choice: ${compChoice}`
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = 'green'
        
    }
    else {
        compScore++
        compScorePara.innerText = compScore
        userChoicePara.innerText = `Choice: ${userChoice}`
        compChoicePara.innerText = `Choice: ${compChoice}`
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = 'red'
    }
}


const playGame = (userChoice) => {
    let compChoice = genCompChoice()

    if (userChoice === compChoice){
        drawGame(userChoice, compChoice)
    }
    else {
        let userWin = true
        if (userChoice === 'rock'){
            userWin = compChoice === 'paper' ? false : true
        }
        else if (userChoice === 'paper') {
            userWin = compChoice === 'rock' ? true : false
        }
        else {
            userWin = compChoice === 'rock' ? false : true
        }
        showWinner(userWin, userChoice, compChoice)
    }
}
 

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id')
        playGame(userChoice)
    })
})