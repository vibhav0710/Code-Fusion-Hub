let boxes = document.querySelectorAll('.box')
let resetBtn = document.querySelector('#reset-btn')
let msg = document.querySelector('#msg')

let turnO = true
let count = 0

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const resetGame = () => {
    count = 0
    boxes.forEach((box) => {
            box.innerText = ''
            msg.innerText = 'Current Player => O'
            enableBoxes()
    })
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            msg.innerText = 'Current Player => X'
            box.innerText = 'O'
            box.style.color = '#197278'
            turnO = false
        }
        else {
            msg.innerText = 'Current Player => O'
            box.innerText = 'X'
            box.style.color = '#C44536'
            turnO = true
        }
        
        box.disabled = true
        count++
        let isWinner = checkWinner()
        if(count === 9 && !isWinner) {
            checkDraw()
        }
    })
})

const checkDraw = () => {
    msg.innerText = 'Draw!'
    disableBoxes()
}

const disableBoxes = () => {
  for(let box of boxes) {
    box.disabled = true
  }
}

const enableBoxes = () => {
  for(let box of boxes) {
    box.disabled = false
  }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`
    disableBoxes()
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val)
                return true
            }
        }
    }
}

resetBtn.addEventListener("click", () => {
    resetGame()
})